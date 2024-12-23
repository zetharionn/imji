import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'
import { getRouteApi } from '@tanstack/react-router'

const imagesRoute = getRouteApi('/images/$imageId')

export const Images = () => {
	const { image } = imagesRoute.useLoaderData()

	return (
		<div className='h-[80vh] flex text-center items-center justify-center'>
			<div>
				<Card>
					<CardHeader>
						<h2 className='text-2xl font-bold'>{image}</h2>
					</CardHeader>
					<CardBody>
						<Image src={image} width={850} />
					</CardBody>
				</Card>
			</div>
		</div>
	)
}
