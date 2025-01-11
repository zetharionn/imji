import { useQuery } from '@tanstack/react-query'
import { retrieve } from '../helpers'

export const useRetrieve = (path: string) => {
	const query = useQuery({
		queryKey: ['retrieve'],
		queryFn: () => retrieve(path),
		gcTime: 0,
		retry: false
	})

	return query
}
