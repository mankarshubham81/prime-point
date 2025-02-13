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
      "www.istockphoto.com",
      "media.istockphoto.com",
      "www.vectorlogo.zone",
      "miro.medium.com",
      "upload.wikimedia.org",
      "www.simplilearn.com",
      "www.tableau.com",
    ],
    formats: ["image/avif", "image/webp"],
  },

};

export default nextConfig;
