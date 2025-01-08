import { Card, CardBody, Image } from '@nextui-org/react'
import { type FC, memo } from 'react'
import type { IImageCard } from './ImageCard.types'

export const ImageCard: FC<IImageCard> = memo(({ url }) => {
	return (
		<Card>
			<CardBody className='overflow-hidden'>
				<Image
					isBlurred
					src={url}
					width={1000}
					height={500}
					className='object-cover w-full h-full rounded-t-lg'
				/>
			</CardBody>
		</Card>
	)
})
