'use client'

import { useUpload } from '@entities/file'
import { FileDropzone } from '../ui'

export const UploadZone = () => {
	const { mutate, isPending } = useUpload()

	return (
		<FileDropzone
			onFile={mutate}
			isLoading={isPending}
			className='flex justify-center items-center rounded-lg h-20 border-2 border-primary-900 border-dashed'
		>
			Drop file here
		</FileDropzone>
	)
}
