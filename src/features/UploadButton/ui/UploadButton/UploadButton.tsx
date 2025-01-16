import { useUpload } from '@entities/image'
import { FileButton } from '@shared/ui'

export const UploadButton = () => {
	const mutation = useUpload()

	return (
		<FileButton
			onFile={file => mutation.mutate(file)}
			isLoading={mutation.isPending}
			accept='image/*'
		>
			Choose file
		</FileButton>
	)
}
