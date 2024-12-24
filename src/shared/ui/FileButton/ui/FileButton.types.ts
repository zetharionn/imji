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
	isDisabled?: boolean
	isLoading?: boolean
	onPress?: () => void
	onFile?: (file: File) => void
	accept?: string
}
