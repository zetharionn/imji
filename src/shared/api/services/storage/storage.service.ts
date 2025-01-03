import type { SupabaseClient } from '@supabase/supabase-js'
import type { IStorageService } from './storage.types'

export class StorageService implements IStorageService {
	private supabaseClient: SupabaseClient
	private bucket: string

	constructor(supabaseClient: SupabaseClient, bucket: string) {
		this.supabaseClient = supabaseClient
		this.bucket = bucket
	}

	async upload(path: string, file: File) {
		const { data, error } = await this.supabaseClient.storage
			.from(this.bucket)
			.upload(path, file)
		return { data, error }
	}

	async retrieve(path: string) {
		const { data } = await this.supabaseClient.storage
			.from(this.bucket)
			.getPublicUrl(path)
		return { data }
	}

	async move(path: string, newPath: string) {
		const { data, error } = await this.supabaseClient.storage
			.from(this.bucket)
			.move(path, newPath)
		return { data, error }
	}

	async remove(paths: string[]) {
		const { error } = await this.supabaseClient.storage
			.from(this.bucket)
			.remove(paths)
		return { error }
	}

	async download(path: string) {
		const { data, error } = await this.supabaseClient.storage
			.from(this.bucket)
			.download(path)
		return { data, error }
	}
}
