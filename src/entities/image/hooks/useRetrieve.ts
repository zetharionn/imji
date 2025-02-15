import { useQuery } from '@tanstack/react-query'
import { retrieve } from '../lib'

export const useRetrieve = (path: string) =>
	useQuery({
		queryKey: ['retrieve'],
		queryFn: () => retrieve(path),
		gcTime: 0,
		retry: false
	})
