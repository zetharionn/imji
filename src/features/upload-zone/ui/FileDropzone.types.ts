import type { DragEvent, ReactNode } from 'react'

export interface IFileDropzone {
	children?: ReactNode
	spinner?: ReactNode
	className?: string
	isLoading?: boolean
	onFile?: (file: File) => void
	onHover?: (event: DragEvent<HTMLDivElement>) => void
}
