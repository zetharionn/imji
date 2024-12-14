import type { SupabaseClient } from '@supabase/supabase-js'

export interface IImageService {
	readonly supabaseClient: SupabaseClient
}
