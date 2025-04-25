import type { ButtonProps } from '@heroui/react'

export interface IFileButton extends ButtonProps {
	onFile?: (file: File) => void
	accept?: string
}
