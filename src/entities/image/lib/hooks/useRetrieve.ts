import { useQuery } from '@tanstack/react-query'
import { retrieve } from '../helpers'

export const useRetrieve = (path: string) => {
	const { data } = useQuery({
		queryKey: ['retrieve'],
		queryFn: () => retrieve(path),
		gcTime: 0
	})

	return data
}
