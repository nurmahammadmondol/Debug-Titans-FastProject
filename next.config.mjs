/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // Allow all image hosts like imgbb, Cloudflare, etc.
        },
      ],
    },
  };
  
  export default nextConfig;
  