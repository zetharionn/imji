'use client'

import { useRetrieve } from '@entities/file'
import { ImageCard } from '@features/image-card'
import { notFound } from 'next/navigation'
import type { FC } from 'react'
import type { IViewer } from './Viewer.types.ts'

export const Viewer: FC<IViewer> = ({ path }) => {
	const { data } = useRetrieve(path)

	if (!data) notFound()

	return (
		<div>
			<ImageCard url={data} />
		</div>
	)
}
