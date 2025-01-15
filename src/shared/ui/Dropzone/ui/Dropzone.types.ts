export interface IDropzone {
	className?: string
	isLoading?: boolean
	onFile?: (file: File) => void
	onHover?: () => void
}
