export interface IStorageService {
	upload: (bucket: string, path: string, file: File) => Promise<UploadResponse>
	download: (bucket: string, path: string) => Promise<DownloadResponse>
	move: (bucket: string, path: string, newPath: string) => Promise<MoveResponse>
	publicUrl: (bucket: string, path: string) => Promise<PublicUrlResponse>
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

export type PublicUrlResponse = {
	data: { publicUrl: string }
}
