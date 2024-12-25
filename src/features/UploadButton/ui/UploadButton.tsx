import { upload } from '@entities/images'
import { FileButton } from '@shared/ui'
import { useMutation } from '@tanstack/react-query'

export const UploadButton = () => {
	const mutation = useMutation({
		mutationKey: ['upload'],
		mutationFn: upload
	})

	return (
		<FileButton
			onFile={file => mutation.mutate(file)}
			isLoading={mutation.isPending}
		>
			Choose file
		</FileButton>
	)
}
