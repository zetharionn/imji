import { Button } from '@nextui-org/react'
import { type ChangeEvent, type FC, useRef } from 'react'
import type { IFileButton } from './FileButton.types'

export const FileButton: FC<IFileButton> = ({ onFile, isLoading }) => {
	const ref = useRef<HTMLInputElement | null>(null)
	const press = () => ref.current?.click()
	const change = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.currentTarget.files?.[0] as File
		onFile(file)
	}

	return (
		<>
			<Button onPress={press} isLoading={isLoading}>
				Choose File
			</Button>
			<input ref={ref} onChange={change} hidden type='file' accept='image/*' />
		</>
	)
}
