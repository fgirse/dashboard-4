
"use client";
import { CldImage } from 'next-cloudinary';

export default function Test() {
  return (
    <CldImage
      deliveryType='fetch'  
      width="1335"
      height="891"
      src="space_mt4o5t"
      sizes="100vw"
      overlays={[{
        position: {
          x: 140,
          y: 140,
          angle: -20,
          gravity: 'south_east',
        },
        text: {
          color: 'blueviolet',
          fontFamily: 'Source Sans Pro',
          fontSize: 280,
          fontWeight: 'bold',
          letterSpacing: 14,
          text: 'Cool Beans'
        }
      }]}
      alt=""
    />
  );
}