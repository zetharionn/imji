import type { DragEvent, FC, PropsWithChildren } from 'react'
import type { IDropzone } from './Dropzone.types'
import { Spinner } from '@nextui-org/react'

export const Dropzone: FC<PropsWithChildren<IDropzone>> = ({
	children,
	className,
	isLoading = false,
	onFile = () => {},
	onHover = () => {}
}) => {
	const onDrop = (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault()
		const file = event.dataTransfer.files?.[0]
		onFile(file)
	}
	const onDragOver = (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault()
		onHover()
	}

	return (
		<div onDrop={onDrop} onDragOver={onDragOver} className={className}>
			{isLoading ? <Spinner /> : children}
		</div>
	)
}
