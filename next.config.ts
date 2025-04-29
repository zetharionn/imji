import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [new URL(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/**`)]
	}
}

export default nextConfig
