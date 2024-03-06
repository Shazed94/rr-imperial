/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.rr-imperial.com',

            },
        ],
    },
}

module.exports = nextConfig
