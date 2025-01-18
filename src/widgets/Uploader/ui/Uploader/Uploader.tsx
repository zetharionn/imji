import { useUploadState } from '@entities/image'
import { PLATFORM } from '@entities/user'
import { UploadButton } from '@features/UploadButton'
import { UploadZone } from '@features/UploadZone'
import { Alert, Link } from '@heroui/react'
import { ROUTES } from '@shared/lib'

export const Uploader = () => {
	const { data, error, status } = useUploadState()

	return (
		<div className='flex flex-col items-center w-[50vw] sm:w-[25vw] gap-5'>
			<div className='flex flex-col w-full gap-3'>
				{PLATFORM === 'Desktop' && <UploadZone />}
				<UploadButton />
			</div>

			<div className='flex flex-col w-full gap-3'>
				{status === 'success' && (
					<Alert
						color='success'
						title='Success'
						description={
							<Link
								color='success'
								href={`${ROUTES.IMAGES}/${data?.data?.path}`}
							>
								{data?.data?.path}
							</Link>
						}
					/>
				)}
				{status === 'error' && (
					<Alert color='danger' title='Error' description={error?.message} />
				)}
			</div>
		</div>
	)
}
