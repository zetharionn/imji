import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { FC } from 'react'

const queryClient = new QueryClient()

export const Query = (Component: FC) => () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Component />
		</QueryClientProvider>
	)
}
