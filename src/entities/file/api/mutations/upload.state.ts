import { type MutationState, useMutationState } from '@tanstack/react-query'
import type { Upload } from '@shared/api'

export const useUploadState = () => {
	const mutation = useMutationState<MutationState<Upload>>({
		filters: { mutationKey: ['upload'] }
	})

	return { ...mutation[mutation.length - 1] }
}
