import { type PublicUrlResponse, storageService } from '@shared/services'

export const publicUrl = (path: string): PublicUrlResponse => {
	return storageService.publicUrl('images', path).then(res => {
		if (!res.data) throw Error("Can't get public url")
		return res
	})
}
