import { createClient } from '@supabase/supabase-js'
import { QueryClient } from '@tanstack/react-query'
import { BUCKET } from '../constants'
import { Storage } from './services'

export const supabaseClient = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export const queryClient = new QueryClient()

export const storage = new Storage(supabaseClient, BUCKET)
