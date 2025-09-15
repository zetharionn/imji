import type { IImage } from '@features/image'
import { Image as Picture } from '@heroui/react'
import NextImage from 'next/image'
import type { FC } from 'react'

export const Image: FC<IImage> = ({ url }) => {
	return (
		<Picture
			as={NextImage}
			src={url}
			width={1000}
			height={500}
			alt='Not found'
			className='object-contain w-full h-full rounded-t-lg'
			isBlurred
		/>
	)
}
