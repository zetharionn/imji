import { QueryClient } from '@tanstack/react-query'
import { convexQueryClient } from './convex'

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			queryKeyHashFn: convexQueryClient.hashFn(),
			queryFn: convexQueryClient.queryFn()
		}
	}
})

convexQueryClient.connect(queryClient)
