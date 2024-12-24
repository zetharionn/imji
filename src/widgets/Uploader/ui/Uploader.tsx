import { FileButton, useFileButton } from '@features/FileButton'
import { Alert } from '@nextui-org/react'

export const Uploader = () => {
	const { mutation } = useFileButton()

	return (
		<div className='flex flex-col text-center items-center justify-center gap-4'>
			<div className='flex flex-col gap-4 w-64'>
				<FileButton
					onFile={file => mutation.mutate(file)}
					isLoading={mutation.isPending}
				/>
				<Alert
					isVisible={mutation.isSuccess}
					description='Uploaded successfully'
					color='success'
					variant='bordered'
				/>
				<Alert
					isVisible={mutation.isError}
					description={mutation.error?.message}
					color='danger'
					variant='bordered'
				/>
			</div>
		</div>
	)
}
