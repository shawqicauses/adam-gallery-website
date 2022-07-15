const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [process.env.NEXT_IMAGE_ALLOWED_DOMAINS]
  }
}

module.exports = nextConfig
