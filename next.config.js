// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
// };

module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['spbkater.ru', 'tailwindcss.com', 'jets.ru', 'lukcode.com'],
    },
    experimental: {
        scrollRestoration: true,
    },
};
