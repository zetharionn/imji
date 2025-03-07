import { Spinner } from '@heroui/react'
import {
	type DragEvent,
	type FC,
	type PropsWithChildren,
	memo,
	useCallback
} from 'react'
import type { IDropzone } from './Dropzone.types'

export const Dropzone: FC<PropsWithChildren<IDropzone>> = memo(
	({
		children,
		className,
		isLoading = false,
		onFile = () => {},
		onHover = () => {}
	}) => {
		const onDrop = useCallback(
			(event: DragEvent<HTMLDivElement>, callback: (file: File) => void) => {
				event.preventDefault()
				callback(event.dataTransfer.files[0])
			},
			[]
		)
		const onDragOver = useCallback(
			(event: DragEvent<HTMLDivElement>, callback: () => void) => {
				event.preventDefault()
				callback()
			},
			[]
		)

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
)
