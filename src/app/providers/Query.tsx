'use client'

import { getQueryClient } from '@shared/api'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'
import type { FC, PropsWithChildren } from 'react'

export const Query: FC<PropsWithChildren> = ({ children }) => {
	const queryClient = getQueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
		</QueryClientProvider>
	)
}
