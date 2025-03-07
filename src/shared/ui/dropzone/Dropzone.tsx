import { Spinner } from '@heroui/react'
import type { DragEvent, FC, PropsWithChildren } from 'react'
import type { IDropzone } from './Dropzone.types'

export const Dropzone: FC<PropsWithChildren<IDropzone>> = ({
	children,
	className,
	isLoading = false,
	onFile = () => {},
	onHover = () => {}
}) => {
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

	return (
		<div
			onDrop={event => onDrop(event, onFile)}
			onDragOver={event => onDragOver(event, onHover)}
			className={className}
		>
			{isLoading ? <Spinner /> : children}
		</div>
	)
}
