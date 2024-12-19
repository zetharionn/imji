import { createClient } from '@supabase/supabase-js'
import { StorageService } from './Storage'

export * from './Storage'

export const supabaseClient = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_ANON_KEY
)

export const storageService = new StorageService(supabaseClient)
