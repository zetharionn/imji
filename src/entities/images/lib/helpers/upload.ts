import { ImagesSchema } from '@entities/images'
import { storageService } from '@shared/services'
import * as v from 'valibot'

export const upload = (file: File) => {
	const result = v.parse(ImagesSchema, file)
	return storageService
		.upload('images', crypto.randomUUID(), result)
		.then(res => {
			if (res.error) throw res.error
			return res
		})
}
