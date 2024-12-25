import { ImagesSchema } from '@entities/images'
import { BUCKET } from '@shared/lib'
import { storageService } from '@shared/services'
import * as v from 'valibot'

export const upload = (image: File) =>
	storageService.upload(
		BUCKET,
		crypto.randomUUID(),
		v.parse(ImagesSchema, image)
	)
