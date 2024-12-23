import { type UploadResponse, storageService } from '@shared/services'

export const upload = (file: File): UploadResponse => {
	return storageService.upload('images', file.name, file).then(res => {
		if (res.error) throw res.error
		return res
	})
}
