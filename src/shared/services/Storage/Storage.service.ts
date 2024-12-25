import type { SupabaseClient } from '@supabase/supabase-js'
import type { IStorageService } from './Storage.types'

export class StorageService implements IStorageService {
	private supabaseClient: SupabaseClient

	constructor(supabaseClient: SupabaseClient) {
		this.supabaseClient = supabaseClient
	}

	async upload(bucket: string, path: string, file: File) {
		const { data, error } = await this.supabaseClient.storage
			.from(bucket)
			.upload(path, file)
		return { data, error }
	}

	async download(bucket: string, path: string) {
		const { data, error } = await this.supabaseClient.storage
			.from(bucket)
			.download(path)
		return { data, error }
	}

	async move(bucket: string, path: string, newPath: string) {
		const { data, error } = await this.supabaseClient.storage
			.from(bucket)
			.move(path, newPath)
		return { data, error }
	}

	async publicUrl(bucket: string, path: string) {
		const { data } = await this.supabaseClient.storage
			.from(bucket)
			.getPublicUrl(path)
		return { data }
	}
}
