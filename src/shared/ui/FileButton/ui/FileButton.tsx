import { Button } from '@nextui-org/react'
import {
	type ChangeEvent,
	type FC,
	memo,
	type PropsWithChildren,
	useRef
} from 'react'
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
		onPress = () => {},
		onFile = () => {},
		accept
	}) => {
		const ref = useRef<HTMLInputElement | null>(null)
		const change = (event: ChangeEvent<HTMLInputElement>) => {
			const file = event.currentTarget.files?.[0] as File
			onFile(file)
		}
		const press = () => {
			ref.current?.click()
			onPress()
		}

		return (
			<>
				<Button
					className={className}
					variant={variant}
					color={color}
					size={size}
					radius={radius}
					isDisabled={isDisabled}
					isLoading={isLoading}
					onPress={press}
				>
					{children}
				</Button>
				<input ref={ref} type='file' hidden onChange={change} accept={accept} />
			</>
		)
	}
)
