import { createClient } from '@supabase/supabase-js'
import { ImageService } from './Image'

export const supabaseClient = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_ANON_KEY
)

export const imageService = new ImageService(supabaseClient)
