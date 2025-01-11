import { ImageCard } from '@features/ImageCard'
import { Alert, Spinner } from '@nextui-org/react'
import type { FC } from 'react'
import type { IViewer } from './Viewer.types'
import { useRetrieve } from '@entities/image'

export const Viewer: FC<IViewer> = ({ path }) => {
	const { data, error, status } = useRetrieve(path)

	return (
		<div>
			{data?.data?.publicUrl && <ImageCard url={data?.data?.publicUrl} />}
			{status === 'pending' && <Spinner size='lg' />}
			<Alert
				isVisible={status === 'error'}
				color='danger'
				title='Error'
				description={error?.message}
			/>
		</div>
	)
}
