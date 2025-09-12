'use client'

import { retrieve } from '@entities/storage'
import { useSuspenseQuery } from '@tanstack/react-query'

export const useRetrieve = (path: string) => {
	return useSuspenseQuery({
		queryKey: ['retrieve'],
		queryFn: async () => await retrieve(path),
		retry: false
	})
}
