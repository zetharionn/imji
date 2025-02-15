import type { UploadResponse } from '@shared/api'
import { type MutationState, useMutationState } from '@tanstack/react-query'

export const useUploadState = () => {
	const mutation = useMutationState<MutationState<UploadResponse>>({
		filters: { mutationKey: ['upload'] }
	})

	return { ...mutation[mutation.length - 1] }
}
