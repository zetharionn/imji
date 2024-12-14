import type { SupabaseClient } from '@supabase/supabase-js'
import type { IImageService } from './Image.types'

export class ImageService implements IImageService {
	readonly supabaseClient: SupabaseClient

	constructor(supabaseClient: SupabaseClient) {
		this.supabaseClient = supabaseClient
	}
}
