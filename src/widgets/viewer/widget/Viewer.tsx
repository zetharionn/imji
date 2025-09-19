'use client'

import { useRetrieve } from '@entities/file'
import { Image } from '@features/image'
import { Card, CardBody } from '@heroui/react'
import { notFound } from 'next/navigation'
import type { FC } from 'react'
import type { IViewer } from './Viewer.types'

export const Viewer: FC<IViewer> = ({ path }) => {
	const { data } = useRetrieve(path)

	if (!data) notFound()

	return (
		<div>
			<Card>
				<CardBody className='overflow-hidden'>
					<Image url={data} />
				</CardBody>
			</Card>
		</div>
	)
}
