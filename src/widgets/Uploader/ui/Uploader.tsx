import { UploadButton, useUploadButton } from '@features/UploadButton'
import { Alert, Link } from '@nextui-org/react'
import { ROUTES } from '@shared/lib'

export const Uploader = () => {
	const { data, error, status } = useUploadButton()

	return (
		<div className='flex flex-col text-center items-center justify-center gap-4'>
			<UploadButton />
			<Alert
				color='success'
				variant='bordered'
				isVisible={status === 'success'}
				title='Success'
				description={
					<Link href={`${ROUTES.IMAGES}/${data?.path}`}>{data?.path}</Link>
				}
			/>
			<Alert
				color='danger'
				variant='bordered'
				isVisible={status === 'error'}
				title='Error'
				description={error?.message}
			/>
		</div>
	)
}
