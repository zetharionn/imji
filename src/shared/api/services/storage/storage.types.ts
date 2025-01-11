export interface IStorageService {
	upload: (path: string, file: File) => Promise<UploadResponse>
	retrieve: (path: string) => Promise<RetrieveResponse>
	move: (path: string, newPath: string) => Promise<MoveResponse>
	remove: (paths: string[]) => Promise<RemoveResponse>
	download: (path: string) => Promise<DownloadResponse>
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
