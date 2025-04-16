import React, { use, useTransition } from 'react'
import { v2 as cloudinary } from 'cloudinary'
import CloudinaryImage from './CldImage'
import { useTranslations } from 'next-intl';

const Hero_Skizze = () => {

  const t = useTranslations("Hero_Skizze" );

  cloudinary.image("front_face.png", {transformation: [
    {gravity: "face", height: 350, width: 650, crop: "thumb"},
    {radius: 10},
    {effect: "sepia"},
    {overlay: "cloudinary_icon"},
    {effect: "brightness:90"},
    {opacity: 60},
    {width: 50, crop: "scale"},
    {flags: "layer_apply", gravity: "south", x: 5, y: 5},
    {angle: 0},
    {quality: "auto"}
    ]})


  return (
    <>
    <section className="bg-green-500 min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className='  text-4xl font-bold text-center text-stone-700'>{t('text01')}</h1>
      
    <div className='min-h-screen flex flex-col items-center justify-center'>
     
      <p className='text-lg text-center mt-4'></p>
    <CloudinaryImage className='mt-[12vh] mb-8' src="skizze_cvbvbm" height={600} width={900} alt="Skizze"/>
    </div>
    <h1 className='text-4xl font-bold text-center text-stone-700'><span className="text-amber-18 text-orange-400">8zensecom </span>  v{t('text02')}</h1>
    </section>
    </>
  )
}

export default Hero_Skizze