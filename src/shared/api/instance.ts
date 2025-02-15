import { BUCKET } from '@shared/constants'
import { createClient } from '@supabase/supabase-js'
import { StorageService } from './services'

export const supabaseClient = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_ANON_KEY
)

export const storageService = new StorageService(supabaseClient, BUCKET)
