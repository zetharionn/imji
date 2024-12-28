import { storageService } from '@shared/api'
import { ImageSchema } from '@entities/image'
import * as v from 'valibot'

export const upload = (image: File) =>
	storageService.upload(crypto.randomUUID(), v.parse(ImageSchema, image))
