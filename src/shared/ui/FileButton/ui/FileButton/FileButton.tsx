import { Button } from '@heroui/react'
import { type FC, type PropsWithChildren, memo } from 'react'
import { useFileButton } from '../../lib'
import type { IFileButton } from './FileButton.types'

export const FileButton: FC<PropsWithChildren<IFileButton>> = memo(
	({
		children,
		className,
		variant = 'solid',
		color = 'default',
		size = 'md',
		radius = 'md',
		isDisabled = false,
		isLoading = false,
		onClick = () => {},
		onFile = () => {},
		accept
	}) => {
		const { ref, onChange, onPress } = useFileButton()

		return (
			<>
				<Button
					className={className}
					variant={variant}
					color={color}
					size={size}
					radius={radius}
					isLoading={isLoading}
					isDisabled={isDisabled}
					onPress={event => onPress(event, onClick)}
				>
					{children}
				</Button>
				<input
					hidden
					ref={ref}
					type='file'
					accept={accept}
					onChange={event => onChange(event, onFile)}
				/>
			</>
		)
	}
)
