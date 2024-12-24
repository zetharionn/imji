import { Button } from '@nextui-org/react'
import type { IFileButton } from './FileButton.types'
import {
	type ChangeEvent,
	type FC,
	type PropsWithChildren,
	useRef
} from 'react'

export const FileButton: FC<PropsWithChildren<IFileButton>> = ({
	children,
	variant = 'solid',
	color = 'default',
	size = 'md',
	radius = 'md',
	isDisabled = false,
	isLoading = false,
	onPress = () => {},
	onFile = () => {},
	accept = ''
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
