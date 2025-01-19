import { Button } from '@heroui/react'
import { type FC, type PropsWithChildren, memo } from 'react'
import { useFileButton } from '../../lib'
import type { IFileButton } from './FileButton.types'

export const FileButton: FC<PropsWithChildren<IFileButton>> = memo(
	({
		children,
		variant = 'solid',
		color = 'default',
		size = 'md',
		radius = 'md',
		startContent = null,
		endContent = null,
		fullWidth = false,
		isIconOnly = false,
		isDisabled = false,
		isLoading = false,
		className,
		onClick = () => {},
		onFile = () => {},
		accept
	}) => {
		const { ref, onChange, onPress } = useFileButton()

		return (
			<>
				<Button
					variant={variant}
					color={color}
					size={size}
					radius={radius}
					startContent={!isLoading && startContent}
					endContent={!isLoading && endContent}
					fullWidth={fullWidth}
					isIconOnly={isIconOnly}
					isDisabled={isDisabled}
					isLoading={isLoading}
					className={className}
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
