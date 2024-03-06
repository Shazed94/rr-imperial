/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                // protocol: 'http',
                // hostname: '127.0.0.1',
                protocol: 'https',
                hostname: 'api.rr-imperial.com',

            },
        ],
    },
}

module.exports = nextConfig
