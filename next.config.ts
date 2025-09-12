import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			new URL(`${process.env.NEXT_PUBLIC_CONVEX_URL}/**`),
			new URL(`${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/**`)
		]
	}
}

export default nextConfig
