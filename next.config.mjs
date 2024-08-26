/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
        "stablo.web3templates.com",
        "avatars.githubusercontent.com",
        "resources.247studio.co",
        "maag.codesupply.co",
        "localhost"
    ],
  },
};

export default nextConfig;
