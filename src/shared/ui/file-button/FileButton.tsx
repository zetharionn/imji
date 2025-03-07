import { Button, type PressEvent } from '@heroui/react'
import {
	type ChangeEvent,
	type FC,
	type PropsWithChildren,
	memo,
	useCallback,
	useRef
} from 'react'
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
		const ref = useRef<HTMLInputElement>(null)
		const onChange = useCallback(
			(
				event: ChangeEvent<HTMLInputElement>,
				callback: (file: File) => void
			) => {
				event.currentTarget.files?.[0] && callback(event.currentTarget.files[0])
			},
			[]
		)
		const onPress = useCallback(
			(event: PressEvent, callback: (event: PressEvent) => void) => {
				ref.current?.click()
				callback(event)
			},
			[]
		)

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
