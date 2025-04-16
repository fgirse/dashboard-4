import { Metadata } from 'next';
import { getCldOgImageUrl } from 'next-cloudinary';
 
const url = getCldOgImageUrl({
  src: '<Carl_SagebBanner>',
  overlays: [{
    text: {
      fontFamily: 'Source Sans Pro',
      fontSize: 120,
      fontWeight: 'bold',
      text: 'Next Cloudinary'
    }
  }]
})
 
export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        width: 1200,
        height: 627,
        url
      }
    ]
  }
}