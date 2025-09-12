declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: 'development' | 'production' | 'test'
		NEXT_PUBLIC_APPWRITE_PROJECT_ID: string
		NEXT_PUBLIC_APPWRITE_HOSTNAME: string
		NEXT_PUBLIC_APPWRITE_ENDPOINT: string
		NEXT_PUBLIC_APPWRITE_BUCKET: string
	}
}
