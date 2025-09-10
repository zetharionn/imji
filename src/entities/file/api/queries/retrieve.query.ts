'use client'

import { api } from '@convex/_generated/api'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useAction } from 'convex/react'

export const useRetrieve = (path: string) => {
	const retrieve = useAction(api.files.retrieve)

	return useSuspenseQuery({
		queryKey: ['retrieve'],
		queryFn: async () => await retrieve({ id: path }),
		retry: false
	})
}
