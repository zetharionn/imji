/// <reference types="@rsbuild/core/types" />

interface ImportMeta {
	readonly env: ImportMetaEnv
}

interface ImportMetaEnv {
	readonly PUBLIC_SUPABASE_URL: string
	readonly PUBLIC_SUPABASE_ANON_KEY: string
	readonly MODE: string
	readonly BASE_URL: string
	readonly PROD: boolean
	readonly DEV: boolean
}
