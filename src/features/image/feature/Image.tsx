import type { IImage } from '@features/image'
import { Image as Picture } from '@heroui/react'
import NextImage from 'next/image'
import type { FC } from 'react'

export const Image: FC<IImage> = ({ url }) => {
	return (
		<Picture
			as={NextImage}
			src={url}
			width={1250}
			height={625}
			alt='Not found'
			className='object-contain object-center h-full w-full'
			isBlurred
		/>
	)
}
