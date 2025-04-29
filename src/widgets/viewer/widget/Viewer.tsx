import { ImageCard } from '@features/image-card'
import type { IViewer } from './Viewer.types'
import { useRetrieve } from '@entities/file'
import type { FC } from 'react'

export const Viewer: FC<IViewer> = ({ path }) => {
	const { data } = useRetrieve(path)

	return <div>{data && <ImageCard url={data} />}</div>
}
