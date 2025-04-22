import { storage } from '@shared/api'
import { useMutation } from '@tanstack/react-query'
import * as v from 'valibot'
import { FileSchema } from '../../model'

export const useUpload = () =>
	useMutation({
		mutationKey: ['upload'],
		mutationFn: async (file: File) =>
			await storage.upload(crypto.randomUUID(), v.parse(FileSchema, file))
	})
