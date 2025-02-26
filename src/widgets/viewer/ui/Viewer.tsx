import { useRetrieve } from '@entities/image'
import { ImageCard } from '@features/image-card'
import { Alert, Spinner } from '@heroui/react'
import type { FC } from 'react'
import type { IViewer } from './Viewer.types'

export const Viewer: FC<IViewer> = ({ path }) => {
	const { data, error, status } = useRetrieve(path)

	return (
		<div>
			{status === 'success' && <ImageCard url={data} />}
			{status === 'pending' && <Spinner size='lg' />}
			{status === 'error' && (
				<Alert color='danger' title='Error' description={error.message} />
			)}
		</div>
	)
}
