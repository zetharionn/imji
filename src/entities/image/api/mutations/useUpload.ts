import { storageService } from '@shared/api'
import { useMutation } from '@tanstack/react-query'
import * as v from 'valibot'
import { ImageSchema } from '../../model'

export const useUpload = () => {
	return useMutation({
		mutationKey: ['upload'],
		mutationFn: async (image: File) => {
			return await storageService.upload(
				crypto.randomUUID(),
				v.parse(ImageSchema, image)
			)
		}
	})
}
