import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "homeopathyandwellness.com",
      "images.unsplash.com",
      "i.ytimg.com",
      "player.vimeo.com",
      "randomuser.me",
    ],
    formats: ["image/avif", "image/webp"],
  },

};

export default nextConfig;
