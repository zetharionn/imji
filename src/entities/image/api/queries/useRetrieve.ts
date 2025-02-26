import { storageService } from '@shared/api'
import { useSuspenseQuery } from '@tanstack/react-query'
import * as v from 'valibot'
import { UrlSchema } from '../../model'

export const useRetrieve = (path: string) => {
	return useSuspenseQuery({
		queryKey: ['retrieve'],
		queryFn: async () => {
			const { data } = await storageService.retrieve(path)
			return v.parse(UrlSchema, data?.publicUrl)
		},
		retry: false
	})
}
