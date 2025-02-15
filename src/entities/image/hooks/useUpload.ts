import { useMutation } from '@tanstack/react-query'
import { upload } from '../helpers'

export const useUpload = () =>
	useMutation({
		mutationKey: ['upload'],
		mutationFn: upload
	})
