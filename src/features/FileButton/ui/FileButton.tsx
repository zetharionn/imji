import { Button } from '@nextui-org/react'
import { useFileButton } from '../lib'

export const FileButton = () => {
	const { ref, click, change, mutation } = useFileButton()

	return (
		<>
			<Button onPress={click} isLoading={mutation.isPending}>
				Choose File
			</Button>
			<input ref={ref} onChange={change} hidden type='file' accept='image/*' />
		</>
	)
}
