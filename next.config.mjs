/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "admin-o2dentaire.graphandco.com",
            pathname: "/uploads/**",
         },
         {
            protocol: "http",
            hostname: "localhost",
            pathname: "/**",
         },
      ],
   },
};

export default nextConfig;
