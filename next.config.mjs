import NextConfig from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig = {
  
  images: {
    loader: "cloudinary",
  },

  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "Carlo2024",
    NEXT_PUBLIC_CLOUDINARY_PRESET_NAME:"school"
  },
  
  images: {
  
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  }

 
const withNextIntl = createNextIntlPlugin();



export default withNextIntl(nextConfig);


