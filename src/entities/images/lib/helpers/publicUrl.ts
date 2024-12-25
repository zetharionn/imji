import { BUCKET } from '@shared/lib'
import { storageService } from '@shared/services'

export const publicUrl = (imageId: string) =>
	storageService.publicUrl(BUCKET, imageId)
