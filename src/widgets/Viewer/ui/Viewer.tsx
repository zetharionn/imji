import type { FC } from 'react'
import type { IViewer } from './Viewer.types'
import { ImageCard } from '@features/ImageCard'
import { Alert } from '@nextui-org/react'

export const Viewer: FC<IViewer> = ({ url }) => {
	return (
		<div>
			{url ? (
				<ImageCard url={url} />
			) : (
				<Alert color='danger' title='Error' description='Image not found' />
			)}
		</div>
	)
}
