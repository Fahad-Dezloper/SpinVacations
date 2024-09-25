import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'i.pinimg.com',
      'spinvacations.in',
      'cdn.sanity.io',
      'media.istockphoto.com',
      'images.pexels.com',
      'facts.net',
      'media.easemytrip.com',
      'upload.wikimedia.org',
    ],
  },
};

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default bundleAnalyzer(nextConfig);
