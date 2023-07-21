const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true
  },
  distDir: "out",
  output: "export"
}

module.exports = nextConfig