import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.dog.ceo',
			},
		],
	},
	experimental: {
		ppr: true,
	},
};

export default nextConfig;
