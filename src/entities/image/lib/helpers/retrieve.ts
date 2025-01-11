import { UrlSchema } from '../../model'
import { storageService } from '@shared/api'
import * as v from 'valibot'

export const retrieve = async (path: string) => {
	const { data } = await storageService.retrieve(path)
	return v.parse(UrlSchema, data?.publicUrl)
}
