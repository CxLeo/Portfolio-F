/** @type {import('next').NextConfig} */
const nextConfig = {
    
    images:{
        
        remotePatterns:[
            {
                hostname:'framerusercontent.com'
            }
        ]
    },
    reactStrictMode:false
};

export default nextConfig;
