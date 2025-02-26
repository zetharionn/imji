import { useRetrieve } from '@entities/image'
import { ImageCard } from '@features/image-card'
import type { FC } from 'react'
import type { IViewer } from './Viewer.types'

export const Viewer: FC<IViewer> = ({ path }) => {
	const { data } = useRetrieve(path)

	return (
		<div>
			<ImageCard url={data} />
		</div>
	)
}
