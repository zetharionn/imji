import { storageService } from '@shared/api'

export const list = async () => {
	const { data, error } = await storageService.list()
	if (error) {
		throw error
	}
	return { data, error }
}
