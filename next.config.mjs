/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  // Required when deploying to a GitHub repo subdirectory (e.g. username.github.io/repo-name).
  // Leave empty if using a custom domain or a user/org Pages site (username.github.io).
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

export default nextConfig
