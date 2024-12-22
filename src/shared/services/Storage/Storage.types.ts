export interface IStorageService {
	upload: (bucket: string, path: string, file: File) => UploadResponse
}

export type UploadResponse = Promise<{
	data: { id: string; path: string; fullPath: string } | null
	error: null | Error
}>
