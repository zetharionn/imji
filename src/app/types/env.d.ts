declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: 'development' | 'production' | 'test'
		NEXT_PUBLIC_SUPABASE_URL: string
		NEXT_PUBLIC_SUPABASE_ANON_KEY: string
		NEXT_PUBLIC_CONVEX_URL: string
		NEXT_PUBLIC_APPWRITE_PROJECT_ID: string
		NEXT_PUBLIC_APPWRITE_PROJECT_NAME: string
		NEXT_PUBLIC_APPWRITE_ENDPOINT: string
		NEXT_PUBLIC_APPWRITE_BUCKET: string
	}
}
