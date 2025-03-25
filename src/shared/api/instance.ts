import { BUCKET } from '@shared/constants'
import { createClient } from '@supabase/supabase-js'
import { QueryClient } from '@tanstack/react-query'
import { StorageService } from './services'

export const supabaseClient = createClient(
	import.meta.env.PUBLIC_SUPABASE_URL,
	import.meta.env.PUBLIC_SUPABASE_ANON_KEY
)

export const queryClient = new QueryClient()

export const storageService = new StorageService(supabaseClient, BUCKET)
