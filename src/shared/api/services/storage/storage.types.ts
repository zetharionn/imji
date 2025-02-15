export interface IStorageService {
	upload: (path: string, file: File) => Promise<UploadResponse>
	retrieve: (path: string) => Promise<RetrieveResponse>
	move: (path: string, newPath: string) => Promise<MoveResponse>
	remove: (paths: string[]) => Promise<RemoveResponse>
	download: (path: string) => Promise<DownloadResponse>
	list: (
		path?: string,
		options?: SearchOptions,
		parameters?: FetchParameters
	) => Promise<ListResponse>
}

export interface UploadResponse {
	data: { id: string; path: string; fullPath: string } | null
	error: Error | null
}
export interface RetrieveResponse {
	data: { publicUrl: string } | null
	error: Error | null
}
export interface MoveResponse {
	data: { message: string } | null
	error: Error | null
}
export interface RemoveResponse {
	error: Error | null
}
export interface DownloadResponse {
	data: Blob | null
	error: Error | null
}

export interface ListResponse {
	data: FileObject[] | null
	error: Error | null
}

export interface Bucket {
	created_at: string
	id: string
	name: string
	owner: string
	public: boolean
	updated_at: string
	allowed_mime_types?: string[]
	file_size_limit?: number
}

export interface FileObject {
	bucket_id: string
	buckets: Bucket
	created_at: string
	id: string
	last_accessed_at: string
	metadata: Record<string, unknown>
	name: string
	owner: string
	updated_at: string
}

export interface SearchOptions {
	limit?: number
	offset?: number
	search?: string
	sortBy?: {
		column?: string
		order?: string
	}
}

export interface FetchParameters {
	signal?: AbortSignal
}
