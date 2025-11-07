/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      domains: ["localhost", "admin-o2dentaire.graphandco.com"],
      remotePatterns: [
         {
            protocol: "https",
            hostname: "admin-o2dentaire.graphandco.com",
            pathname: "/uploads/**",
         },
      ],
   },
};

export default nextConfig;
