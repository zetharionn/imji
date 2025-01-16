import type { PressEvent } from '../../lib'

export interface IFileButton {
	className?: string
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
	isDisabled?: boolean
	isLoading?: boolean
	onClick?: (event: PressEvent) => void
	onFile?: (file: File) => void
	accept?: string
}
