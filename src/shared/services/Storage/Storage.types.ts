export interface IStorageService {
	upload: (
		bucket: string,
		path: string,
		fileBody: FileBody,
		fileOptions?: FileOptions
	) => StorageResponse
}

export type FileBody =
	| ArrayBuffer
	| ArrayBufferView
	| Blob
	| Buffer
	| File
	| FormData
	| NodeJS.ReadableStream
	| ReadableStream<Uint8Array>
	| URLSearchParams
	| string

export interface FileOptions {
	cacheControl?: string
	contentType?: string
	duplex?: string
	upsert?: boolean
}

export type StorageResponse = Promise<{
	data: { id: string; path: string; fullPath: string } | null
	error: null | Error
}>
