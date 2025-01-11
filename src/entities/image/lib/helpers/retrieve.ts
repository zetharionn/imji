import { storageService } from '@shared/api'
import { validateUrl } from '@shared/lib'

export const retrieve = async (path: string) =>
	await storageService
		.retrieve(path)
		.then(res => validateUrl(res.data.publicUrl))
