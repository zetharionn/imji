import { useUpload } from '@entities/image'
import { Dropzone } from '@shared/ui'

export const UploadZone = () => {
	const mutation = useUpload()

	return (
		<Dropzone
			onFile={file => mutation.mutate(file)}
			isLoading={mutation.isPending}
			className='h-20 border-2 border-gray-400 border-dashed flex items-center justify-center rounded-lg'
		>
			Drop items here
		</Dropzone>
	)
}
