import { useMutationState } from '@tanstack/react-query'

export const useUploadState = () => {
	const mutation = useMutationState({
		filters: { mutationKey: ['upload'] }
	})

	return { ...mutation[mutation.length - 1] }
}
