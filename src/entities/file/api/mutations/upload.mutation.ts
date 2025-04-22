import { useMutation } from '@tanstack/react-query'
import { FileSchema } from '../../model'
import { storage } from '@shared/api'
import * as v from 'valibot'

export const useUpload = () =>
	useMutation({
		mutationKey: ['upload'],
		mutationFn: async (file: File) =>
			await storage.upload(crypto.randomUUID(), v.parse(FileSchema, file))
	})
