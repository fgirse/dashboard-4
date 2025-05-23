"use client";

import React, { useState, useCallback, forwardRef, SyntheticEvent, useRef } from 'react';
import Image, { ImageProps } from 'next/image';
import { pollForProcessingImage } from '@cloudinary-util/util';
import { transformationPlugins } from '@cloudinary-util/url-loader';
import type { ImageOptions, ConfigOptions } from '@cloudinary-util/url-loader';

import { getCldImageUrl } from '../../helpers/getCldImageUrl';

import { cloudinaryLoader } from '../../loaders/cloudinary-loader';

export type CldImageProps = Omit<ImageProps, 'src' | 'quality'> & ImageOptions & {
  config?: ConfigOptions;
  src: string;
  unoptimized?: boolean;
};

const CldImage = forwardRef<HTMLImageElement, CldImageProps>(function CldImage(props, ref) {
  const hasThrownError = useRef(false);

  // Add props here that are intended to only be used for
  // Cloudinary URL construction to avoid them being forwarded
  // to the DOM

  const CLD_OPTIONS = [
    'assetType',
    'config',
    'deliveryType',
    'strictTransformations',
  ];

  // Loop through all of the props available on the transformation plugins and verify
  // that we're not accientally applying the same prop twice

  // We're also using those props to push into CLD_OPTIONS which helps us filter what
  // props are applied to the underlaying Image component vs what's being sent
  // to Cloudinary URL construction

  transformationPlugins.forEach(({ props }: { props: Record<string, unknown> }) => {
    const pluginProps = Object.keys(props);
    pluginProps.forEach(prop => {
      if ( CLD_OPTIONS.includes(prop) ) {
        throw new Error(`Option ${prop} already exists!`);
      }
      CLD_OPTIONS.push(prop);
    });
  });

  // Construct the base Image component props by filtering out Cloudinary-specific props

  const imageProps: ImageProps = {
    alt: props.alt,
    src: props.src,
  };

  (Object.keys(props) as Array<keyof typeof props>)
    .filter(key => typeof key === 'string' && !CLD_OPTIONS.includes(key))
    .forEach(key => imageProps[key as keyof ImageProps] = props[key]);

  const defaultImgKey = (Object.keys(imageProps) as Array<keyof typeof imageProps>).map(key => `${key}:${imageProps[key]}`).join(';');
  const [imgKey, setImgKey] = useState(defaultImgKey);

  // Construct Cloudinary-specific props by looking for values for any of the supported prop keys

  type CldOptions = Omit<ImageOptions, 'src'>;

  const cldOptions: CldOptions = {};

  CLD_OPTIONS.forEach((key) => {
    const prop = props[key as keyof ImageOptions];
    if ( prop ) {
      // @ts-expect-error
      cldOptions[key as keyof CldOptions] = prop;
    }
  });

  // The unoptimized flag is intended to remove all optimizations including quality, format, and sizing
  // via responsive sizing. When passing this in, it also prevents the `loader` from running, thus
  // breaking this component. This rewrites the `src` to construct a fully formed Cloudinary URL
  // that also disables format and quality transformations, to deliver it as unoptimized
  // See about unoptimized not working with loader: https://github.com/vercel/next.js/issues/50764

  const IMAGE_OPTIONS: { unoptimized?: boolean } = (process.env.__NEXT_IMAGE_OPTS || {}) as unknown as object;

  if ( props.unoptimized === true || IMAGE_OPTIONS?.unoptimized === true ) {
    imageProps.src = getCldImageUrl({
      ...cldOptions,
      width: imageProps.width,
      height: imageProps.height,
      src: imageProps.src as string,
      format: 'default',
      quality: 'default',
    }, props.config);
  }

  /**
   * handleOnError
   */

  async function onError(options: SyntheticEvent<HTMLImageElement, Event>) {
    let pollForImage = true;

    // The onError function should never fire more than once. The use case for tracking it
    // at all outside of the standard Next Image flow is for scenarios like when Cloudinary
    // is processing an image where we want to try to update the UI upon completion.
    // If this fires a second time, it is likely because of another issue, which will end
    // up triggering an infinite loop if the resulting image keeps erroring and
    // this function sets a key using the current time to force refresh the UI

    if ( hasThrownError.current ) return;

    hasThrownError.current = true;

    if ( typeof props.onError === 'function' ) {
      const onErrorResult = props.onError(options);

      if ( typeof onErrorResult === 'boolean' && onErrorResult === false ) {
        pollForImage = false;
      }
    } else if ( typeof props.onError === 'boolean' && props.onError === false ) {
      pollForImage = false;
    }

    // Give an escape hatch in case the user wants to handle the error themselves
    // or if they want to disable polling for the image

    if ( pollForImage === false ) return;

    const image = options.target as HTMLImageElement
    const result = await pollForProcessingImage({ src: image.src })

    if ( result === false && process.env.NODE_ENV === 'development' ) {
      console.error(`[CldImage] Failed to load image ${props.src}: Image processing failed.`);
    }

    if ( result === true ) {
      setImgKey(`${defaultImgKey};${Date.now()}`);
    }
  }

  const handleOnError = useCallback(onError, [props, defaultImgKey]);

  // Copypasta from https://github.com/prismicio/prismic-next/pull/79/files
  // Thanks Angelo!
  // TODO: Remove once https://github.com/vercel/next.js/issues/52216 is resolved.

  let ResolvedImage = Image;

  if ("default" in ResolvedImage) {
    ResolvedImage = (ResolvedImage as unknown as { default: typeof Image }).default;
  }

  return (
    <ResolvedImage
      key={imgKey}
      {...imageProps}
      loader={(loaderOptions) => cloudinaryLoader({ loaderOptions, imageProps, cldOptions, cldConfig: props.config })}
      onError={handleOnError}
      ref={ref}
    />
  );
});

export default CldImage;