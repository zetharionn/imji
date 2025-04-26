'use client'

import { useQueryClient } from '@tanstack/react-query'

export const useRetrieveState = () => {
	const queryClient = useQueryClient()
	const query = queryClient.getQueryState(['retrieve'])

	return { ...query }
}
