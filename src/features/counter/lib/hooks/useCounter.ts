import { useQuery } from '@tanstack/react-query'
import { list } from '../helpers'

export const useCounter = () => {
	const query = useQuery({
		queryKey: ['counter'],
		queryFn: list,
		refetchInterval: 3
	})
	const amount = (query.data?.data?.length ?? 1) - 1

	return { query, amount }
}
