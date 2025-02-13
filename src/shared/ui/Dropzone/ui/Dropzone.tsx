import { Spinner } from '@heroui/react'
import type { FC, PropsWithChildren } from 'react'
import { useDropzone } from '../hooks'
import type { IDropzone } from './Dropzone.types'

export const Dropzone: FC<PropsWithChildren<IDropzone>> = ({
	children,
	className,
	isLoading = false,
	onFile = () => {},
	onHover = () => {}
}) => {
	const { onDrop, onDragOver } = useDropzone()

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
