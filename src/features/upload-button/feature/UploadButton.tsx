'use client'

import { useUpload } from '@entities/file'
import { FileButton } from '../ui/FileButton.tsx'

export const UploadButton = () => {
	const { mutate, isPending } = useUpload()

	return (
		<FileButton
			variant='shadow'
			color='primary'
			accept='image/*'
			onFile={mutate}
			isLoading={isPending}
		>
			Choose file
		</FileButton>
	)
}
