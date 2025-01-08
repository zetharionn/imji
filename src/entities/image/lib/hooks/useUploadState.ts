import type { UploadResponse } from '@shared/api'
import { useMutationState } from '@tanstack/react-query'

export const useUploadState = () => {
	const mutation = useMutationState({
		filters: { mutationKey: ['upload'] }
	})

	const data = mutation[mutation.length - 1]?.data as UploadResponse
	const error = mutation[mutation.length - 1]?.error
	const status = mutation[mutation.length - 1]?.status

	return { data, error, status }
}
