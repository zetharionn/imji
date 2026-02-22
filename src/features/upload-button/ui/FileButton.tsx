'use client'

import { Button, type PressEvent } from '@heroui/react'
import { type ChangeEvent, type FC, memo, useCallback, useRef } from 'react'
import type { IFileButton } from './FileButton.types.ts'

export const FileButton: FC<IFileButton> = memo(
	({
		children,
		variant = 'solid',
		color = 'default',
		size = 'md',
		radius,
		startContent,
		endContent,
		spinner,
		spinnerPlacement = 'start',
		fullWidth = false,
		isIconOnly = false,
		isDisabled = false,
		isLoading = false,
		disableRipple = false,
		disableAnimation = false,
		onPress = () => {},
		onFile = () => {},
		className,
		accept
	}) => {
		const ref = useRef<HTMLInputElement>(null)
		const handlePress = useCallback(
			(event: PressEvent) => {
				ref.current?.click()
				onPress(event)
			},
			[onPress]
		)
		const handleChange = useCallback(
			(event: ChangeEvent<HTMLInputElement>) => {
				event.currentTarget.files?.[0] && onFile(event.currentTarget.files[0])
			},
			[onFile]
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
					spinner={spinner}
					spinnerPlacement={spinnerPlacement}
					fullWidth={fullWidth}
					isIconOnly={isIconOnly}
					isDisabled={isDisabled}
					isLoading={isLoading}
					disableRipple={disableRipple}
					disableAnimation={disableAnimation}
					className={className}
					onPress={handlePress}
				>
					{children}
				</Button>
				<input
					hidden
					ref={ref}
					type='file'
					accept={accept}
					onChange={handleChange}
				/>
			</>
		)
	}
)
