import { FileButton, useFileButton } from '@features/FileButton'
import { Alert } from '@nextui-org/react'

export const Uploader = () => {
	const { mutation } = useFileButton()

	return (
		<div className='flex flex-col text-center items-center justify-center gap-4'>
			<div>
				<h1 className='sm:text-2xl md:text-3xl lg:text-4xl font-bold'>
					Save and share your images
				</h1>
			</div>
			<div className='flex flex-col gap-4'>
				<FileButton
					onFile={file => mutation.mutate(file)}
					isLoading={mutation.isPending}
				/>
				<Alert
					isVisible={mutation.isSuccess}
					color='success'
					variant='bordered'
				>
					Uploaded successfully
				</Alert>
				<Alert isVisible={mutation.isError} color='danger' variant='bordered'>
					{mutation.error?.message}
				</Alert>
			</div>
		</div>
	)
}
