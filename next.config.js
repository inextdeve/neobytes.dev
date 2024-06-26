/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "blog.openreplay.com",
      "pagepro.co",
      "i0.wp.com",
      "nntheblog.com",
      "mdevelopers.com",
      "i.ibb.co",
      "res.cloudinary.com",
      "images.ctfassets.net",
      "media.graphassets.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/blog/page/1",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
