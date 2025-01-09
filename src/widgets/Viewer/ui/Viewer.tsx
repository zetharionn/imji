import type { FC } from 'react'
import type { IViewer } from './Viewer.types'
import { ImageCard } from '@features/ImageCard'
import { Alert, Spinner } from '@nextui-org/react'

export const Viewer: FC<IViewer> = ({ url, isLoading }) => {
	return (
		<div>
			{isLoading ? (
				<Spinner />
			) : url ? (
				<ImageCard url={url} />
			) : (
				<Alert color='danger' title='Error' description='Image not found' />
			)}
		</div>
	)
}
