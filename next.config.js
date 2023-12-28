/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rr-server.trodad.xyz',

            },
        ],
    },
}

module.exports = nextConfig
