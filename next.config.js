/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    distDir : 'dist',
    images:{
        unoptimized:true,
    },
    env : {
        RESEND_API_KEY:'re_5eziuYfo_4X8bLYiFmeZnEpXQsZaq41aD',
        FROM_EMAIL:'eddiefxme@gmail.com'
    }
}

module.exports = nextConfig
