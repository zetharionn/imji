import { useImagesStore } from '@entities/images'
import { useMutation } from '@tanstack/react-query'

export const useFileButton = () => {
	const upload = useImagesStore(state => state.upload)
	const mutation = useMutation({
		mutationFn: upload
	})

	return { mutation }
}
