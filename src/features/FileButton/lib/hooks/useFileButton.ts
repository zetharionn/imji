import { useImagesStore } from '@entities/images'
import { useMutation } from '@tanstack/react-query'
import { type ChangeEvent, useRef } from 'react'

export const useFileButton = () => {
	const upload = useImagesStore(state => state.upload)

	const mutation = useMutation({
		mutationFn: upload
	})

	const ref = useRef<HTMLInputElement | null>(null)

	const click = () => ref.current?.click()

	const change = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.currentTarget.files?.[0] as File
		mutation.mutate(file)
	}

	return { ref, click, change, mutation }
}
