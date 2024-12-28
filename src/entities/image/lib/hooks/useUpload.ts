import { useMutation } from '@tanstack/react-query'
import { upload } from '../helpers'

export const useUpload = () => {
	const mutation = useMutation({
		mutationKey: ['upload'],
		mutationFn: upload
	})

	return mutation
}
