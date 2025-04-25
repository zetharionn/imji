'use client'

import type { Upload } from '@shared/api'
import { type MutationState, useMutationState } from '@tanstack/react-query'

export const useUploadState = () => {
	const mutation = useMutationState<MutationState<Upload>>({
		filters: { mutationKey: ['upload'] }
	})

	return { ...mutation[mutation.length - 1] }
}
