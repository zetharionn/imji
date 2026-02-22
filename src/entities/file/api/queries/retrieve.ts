'use client'

import { retrieve } from '@entities/storage'
import { useSuspenseQuery } from '@tanstack/react-query'

export const useRetrieve = (path: string) => {
	return useSuspenseQuery({
		queryKey: ['retrieve'],
		queryFn: async () => {
			const url = await retrieve(path)
			const response = await fetch(url, { method: 'HEAD' })
			return response.ok ? url : ''
		},
		retry: false
	})
}
