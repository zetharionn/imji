import { useQueryClient } from '@tanstack/react-query'

export const useRetrieveState = () => {
	const queryClient = useQueryClient()
	const query = queryClient.getQueryState(['retrieve'])
	const data = query?.data
	const error = query?.error
	const status = query?.status

	return { data, error, status }
}
