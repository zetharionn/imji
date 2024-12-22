export interface IStorageService {
	upload: (bucket: string, path: string, file: File) => UploadResponse
	publicUrl: (bucket: string, path: string) => PublicUrlResponse
}

export type UploadResponse = Promise<{
	data: { id: string; path: string; fullPath: string } | null
	error: null | Error
}>

export type PublicUrlResponse = Promise<{
	data: { publicUrl: string }
}>
