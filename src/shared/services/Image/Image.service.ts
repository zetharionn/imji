import type { SupabaseClient } from '@supabase/supabase-js'
import type { FileBody, FileOptions, IImageService } from './Image.types'

export class ImageService implements IImageService {
	readonly supabaseClient: SupabaseClient

	constructor(supabaseClient: SupabaseClient) {
		this.supabaseClient = supabaseClient
	}

	async upload(path: string, fileBody: FileBody, fileOptions?: FileOptions) {
		const { data, error } = await this.supabaseClient.storage
			.from('images')
			.upload(path, fileBody, fileOptions)
		return { data, error }
	}
}
