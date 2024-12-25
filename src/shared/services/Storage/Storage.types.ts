export interface IStorageService {
	upload: (bucket: string, path: string, file: File) => Promise<UploadResponse>
	download: (bucket: string, path: string) => Promise<DownloadResponse>
	move: (bucket: string, path: string, newPath: string) => Promise<MoveResponse>
	remove: (bucket: string, paths: string[]) => Promise<RemoveResponse>
	retrieve: (bucket: string, path: string) => Promise<RetrieveResponse>
}

export type UploadResponse = {
	data: { id: string; path: string; fullPath: string } | null
	error: Error | null
}

export type DownloadResponse = {
	data: Blob | null
	error: Error | null
}

export type MoveResponse = {
	data: { message: string } | null
	error: Error | null
}

export type RemoveResponse = {
	data:
		| {
				name: string
				bucket_id: string
				owner: string
				id: string
				updated_at: string
				created_at: string
				last_accessed_at: string
				metadata: Record<string, string>
				buckets: {
					id: string
					name: string
					owner: string
					file_size_limit?: number
					allowed_mime_types?: string[]
					created_at: string
					updated_at: string
					public: boolean
				}
		  }[]
		| null
	error: Error | null
}

export type RetrieveResponse = {
	data: { publicUrl: string }
}
