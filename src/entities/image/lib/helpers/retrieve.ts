import { storageService } from '@shared/api'

export const retrieve = async (path: string) => {
	const response = await storageService.retrieve(path)
	if (response.error) {
		throw response.error
	}
	return response
}
