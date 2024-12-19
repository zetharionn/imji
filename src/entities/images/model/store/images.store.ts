import { create } from 'zustand'
import type { IImagesStore } from './images.types'
import { storageService } from '@shared/services'

export const useImagesStore = create<IImagesStore>(() => ({
	upload(file: File) {
		return storageService.upload('images', file.name, file).then(res => res)
	}
}))
