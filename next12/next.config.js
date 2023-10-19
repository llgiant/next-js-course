/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/llgiant/test-blogposts/master/images/**',
            },
        ],
    },
}

module.exports = nextConfig
