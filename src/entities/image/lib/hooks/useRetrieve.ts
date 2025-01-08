import { storageService } from '@shared/api'
import { validateUrl } from '@shared/lib'
import { useQuery } from '@tanstack/react-query'

export const useRetrieve = (path: string) => {
	const { data } = useQuery({
		queryKey: ['retrieve'],
		queryFn: async () => {
			const response = await storageService.retrieve(path)
			return validateUrl(response.data.publicUrl)
		}
	})

	return data
}
