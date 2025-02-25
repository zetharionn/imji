import { useUpload } from '@entities/image'
import { Image } from '@heroui/react'
import { FileButton, upload } from '@shared/ui'

export const UploadButton = () => {
	const mutation = useUpload()

	return (
		<FileButton
			onFile={file => mutation.mutate(file)}
			isLoading={mutation.isPending}
			accept='image/*'
			startContent={<Image src={upload} />}
			variant='shadow'
		>
			Choose file
		</FileButton>
	)
}
