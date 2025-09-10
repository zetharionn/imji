'use client'

import { type MutationState, useMutationState } from '@tanstack/react-query'

export const useUploadState = () => {
	const mutation = useMutationState<MutationState>({
		filters: { mutationKey: ['upload'] }
	})

	return { ...mutation[mutation.length - 1] }
}
