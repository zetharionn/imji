export interface IStorageService {
	upload: (bucket: string, path: string, file: File) => Promise<UploadResponse>
	publicUrl: (bucket: string, path: string) => Promise<PublicUrlResponse>
}

export type UploadResponse = {
	data: { id: string; path: string; fullPath: string } | null
	error: null | Error
}

export type PublicUrlResponse = {
	data: { publicUrl: string }
}
