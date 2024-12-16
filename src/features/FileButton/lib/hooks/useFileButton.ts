import { imageService } from '@shared/services'
import { type ChangeEvent, useRef } from 'react'

export const useFileButton = () => {
	const ref = useRef<HTMLInputElement | null>(null)

	const click = () => ref.current?.click()

	const change = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.currentTarget.files?.[0] as File
		imageService.upload(file.name, file)
	}

	return { ref, click, change }
}
