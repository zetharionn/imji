'use client'

import { Spinner } from '@heroui/react'
import { type DragEvent, type FC, memo, useCallback } from 'react'
import type { IFileDropzone } from './FileDropzone.types'

export const FileDropzone: FC<IFileDropzone> = memo(
	({
		children,
		spinner = <Spinner />,
		isLoading = false,
		onHover = () => {},
		onFile = () => {},
		className
	}) => {
		const handleDrop = useCallback(
			(event: DragEvent<HTMLDivElement>) => {
				event.preventDefault()
				onFile(event.dataTransfer.files[0])
			},
			[onFile]
		)
		const handleDragOver = useCallback(
			(event: DragEvent<HTMLDivElement>) => {
				event.preventDefault()
				onHover(event)
			},
			[onHover]
		)

		return (
			<>
				<section
					aria-label='File Dropzone'
					onDrop={handleDrop}
					onDragOver={handleDragOver}
					className={className}
				>
					{isLoading ? spinner : children}
				</section>
			</>
		)
	}
)
