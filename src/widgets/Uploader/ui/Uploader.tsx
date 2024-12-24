import { FileButton, useFileButton } from '@features/FileButton'
import { Alert, Link } from '@nextui-org/react'
import { ROUTES } from '@shared/lib'

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
					title='Uploaded successfully'
					description={
						<Link
							color='success'
							href={`${ROUTES.IMAGES}/${mutation.data?.data?.path}`}
						>
							Click here to view the image
						</Link>
					}
					color='success'
					variant='bordered'
				/>
				<Alert
					isVisible={mutation.isError}
					title='Error'
					description={mutation.error?.message}
					color='danger'
					variant='bordered'
				/>
			</div>
		</div>
	)
}
