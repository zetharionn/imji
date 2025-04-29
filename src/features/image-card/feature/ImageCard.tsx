'use client'

import { Card, CardBody, Image } from '@heroui/react'
import type { IImageCard } from './ImageCard.types'
import NextImage from 'next/image'
import type { FC } from 'react'

export const ImageCard: FC<IImageCard> = ({ url }) => {
	return (
		<Card>
			<CardBody className='overflow-hidden'>
				<Image
					isBlurred
					as={NextImage}
					src={url}
					width={1000}
					height={500}
					className='object-contain w-full h-full rounded-t-lg'
				/>
			</CardBody>
		</Card>
	)
}
