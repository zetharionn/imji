declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: 'development' | 'production' | 'test'
		NEXT_PUBLIC_SUPABASE_URL: string
		NEXT_PUBLIC_SUPABASE_ANON_KEY: string
		NEXT_PUBLIC_CONVEX_URL: string
	}
}
