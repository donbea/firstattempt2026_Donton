// /** @type {import('next').NextConfig} */
// const nextConfig = { output: 'export' }
// module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // This disables image optimization
  },
}

module.exports = nextConfig