import type { StorageResponse } from '@shared/services'

export interface IImagesStore {
	upload: (file: File) => StorageResponse
}
