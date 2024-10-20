/** @type {import('next').NextConfig} */

import  autoCert  from "anchor-pki/auto-cert/integrations/next";

const withAutoCert = autoCert ( {
  enabledEnv: "development",
})
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "lh3.googleusercontent.com" },
    ],
  },
};

export default withAutoCert(nextConfig);
