import { useUploadState } from '@entities/image'
import { UploadButton } from '@features/UploadButton'
import { Alert, Link } from '@nextui-org/react'
import { ROUTES } from '@shared/lib'

export const Uploader = () => {
	const { data, error, status } = useUploadState()

	return (
		<div className='flex flex-col text-center items-center justify-center gap-4'>
			<UploadButton />
			<Alert
				isVisible={status === 'success'}
				color='success'
				title='Success'
				description={
					<Link color='success' href={`${ROUTES.IMAGES}/${data?.data?.path}`}>
						{data?.data?.path}
					</Link>
				}
			/>
			<Alert
				isVisible={status === 'error'}
				color='danger'
				title='Error'
				description={error?.message}
			/>
		</div>
	)
}
