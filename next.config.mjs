/** @type {import('next').NextConfig} */
const csp = `
  default-src 'self'; 
  form-action 'self' https://www.googletagmanager.com https://www.facebook.com; 
  object-src 'none'; 
  frame-ancestors 'self' https://www.googletagmanager.com https://td.doubleclick.net https://www.facebook.com; 
  upgrade-insecure-requests; 
  block-all-mixed-content; 
  style-src 'self' 'unsafe-inline'; 
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; 
  img-src 'self' data: ${process.env.NEXT_PUBLIC_API_URL} https://www.google-analytics.com https://www.facebook.com https://googleads.g.doubleclick.net https://www.googletagmanager.com https://www.google.com https://www.google.com.sg https://www.google.co.th; 
  frame-src 'self' https://www.googletagmanager.com https://td.doubleclick.net https://www.facebook.com; 
  base-uri 'self'; 
  connect-src 'self' ${process.env.NEXT_PUBLIC_API_URL} https://www.google-analytics.com https://analytics.google.com https://www.google.com; 
  script-src-elem 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://www.googleadservices.com https://stats.g.doubleclick.net;
`
const nextConfig = {
  output:'standalone',
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: csp.replace(/\s{2,}/g, ' ').trim(),
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
