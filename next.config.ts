import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
           {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // for Google login images (optional)
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // if you show images from Sanity
      },
    ],
  },

};


export default nextConfig;
