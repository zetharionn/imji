import type { SupabaseClient } from '@supabase/supabase-js'
import type { FileBody, FileOptions, IStorageService } from './Storage.types'

export class StorageService implements IStorageService {
	private supabaseClient: SupabaseClient

	constructor(supabaseClient: SupabaseClient) {
		this.supabaseClient = supabaseClient
	}

	async upload(
		bucket: string,
		path: string,
		fileBody: FileBody,
		fileOptions?: FileOptions
	) {
		const { data, error } = await this.supabaseClient.storage
			.from(bucket)
			.upload(path, fileBody, fileOptions)
		return { data, error }
	}
}
