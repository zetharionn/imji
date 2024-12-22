import type { PublicUrlResponse, UploadResponse } from '@shared/services'

export interface IImagesStore {
	upload: (file: File) => UploadResponse
	publicUrl: (path: string) => PublicUrlResponse
}
