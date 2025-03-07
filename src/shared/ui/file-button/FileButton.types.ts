import type { ReactNode } from 'react'
import type { PressEvent } from '../hooks'

export interface IFileButton {
	variant?:
		| 'solid'
		| 'bordered'
		| 'light'
		| 'flat'
		| 'faded'
		| 'shadow'
		| 'ghost'
	color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
	size?: 'sm' | 'md' | 'lg'
	radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
	startContent?: ReactNode
	endContent?: ReactNode
	fullWidth?: boolean
	isIconOnly?: boolean
	isDisabled?: boolean
	isLoading?: boolean
	className?: string
	onClick?: (event: PressEvent) => void
	onFile?: (file: File) => void
	accept?: string
}
