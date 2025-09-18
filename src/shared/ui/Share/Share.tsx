'use client'

import { addToast, Button } from '@heroui/react'
import { ShareIcon } from '../icons'

export const Share = () => {
	const handlePress = async () => {
		await navigator.clipboard
			.writeText(window.location.href)
			.then(() =>
				addToast({
					variant: 'flat',
					color: 'success',
					title: 'Success',
					description: 'Successfully copied current url to clipboard'
				})
			)
			.catch(error =>
				addToast({
					variant: 'flat',
					color: 'danger',
					title: 'Error',
					description: error
				})
			)
	}

	return (
		<Button isIconOnly variant='bordered' color='primary' onPress={handlePress}>
			<ShareIcon fill={'#f1f1f1'} />
		</Button>
	)
}
