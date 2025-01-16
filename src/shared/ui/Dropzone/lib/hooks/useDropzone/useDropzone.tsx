import type { DragEvent } from 'react'

export const useDropzone = () => {
	const onDrop = (
		event: DragEvent<HTMLDivElement>,
		callback: (file: File) => void
	) => {
		event.preventDefault()
		callback(event.dataTransfer.files[0])
	}
	const onDragOver = (
		event: DragEvent<HTMLDivElement>,
		callback: () => void
	) => {
		event.preventDefault()
		callback()
	}

	return { onDrop, onDragOver }
}
