export interface IStorage {
	upload: (path: string, file: File) => Promise<Upload>
	retrieve: (path: string) => Promise<Retrieve>
	move: (path: string, newPath: string) => Promise<Move>
	remove: (paths: string[]) => Promise<Remove>
	download: (path: string) => Promise<Download>
	list: (
		path?: string,
		options?: SearchOptions,
		parameters?: FetchParameters
	) => Promise<List>
}

export interface Response<T> {
	data: T | null
	error: Error | null
}

export type Upload = Response<{ id: string; path: string; fullPath: string }>

export type Retrieve = Response<{ publicUrl: string }>

export type Move = Response<{ message: string }>

export type Remove = Response<null>

export type Download = Response<Blob>

export type List = Response<FileObject[]>

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
