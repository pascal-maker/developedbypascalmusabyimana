
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  staticPaths: [
    {
      path: '/alan-client',
      servedPath: 'alan-client/dist',
    },
  ],
}