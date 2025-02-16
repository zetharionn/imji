import { queryClient } from '@shared/api'
import { QueryClientProvider } from '@tanstack/react-query'
import type { FC } from 'react'

export const Query = (Component: FC) => () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Component />
		</QueryClientProvider>
	)
}
