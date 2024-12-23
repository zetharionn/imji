import { upload } from '@entities/images'
import { useMutation } from '@tanstack/react-query'

export const useFileButton = () => {
	const mutation = useMutation({
		mutationFn: upload
	})

	return { mutation }
}
