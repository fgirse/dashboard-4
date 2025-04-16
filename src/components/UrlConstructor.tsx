import { constructCloudinaryUrl } from '@cloudinary-util/url-loader';
import process from 'process';


const URLConstructor = (props: { URL: string; [key: string]: any }) => {
const URL = constructCloudinaryUrl({
    options: {
      src: 'https://res.cloudinary.com/carlo2024/image/upload/v1742485606/interiore14_uptcek.jpg',
      width: 800,
      height: 600
    },
    config: {
      cloud: {
        cloudName: 'procss.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME',
      }
    }
  })
}
  export { URLConstructor };