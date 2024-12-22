import { storageService } from '@shared/services'
import { create } from 'zustand'
import type { IImagesStore } from './images.types'

export const useImagesStore = create<IImagesStore>(() => ({
	upload(file: File) {
		return storageService.upload('images', file.name, file).then(res => {
			if (res.error) throw res.error
			return res
		})
	}
}))
