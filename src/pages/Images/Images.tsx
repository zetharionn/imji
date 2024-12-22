import { useImagesStore } from '@entities/images'
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'
import { getRouteApi } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

const imagesRoute = getRouteApi('/images/$image')

export const Images = () => {
	const { image } = imagesRoute.useParams()
	const publicUrl = useImagesStore(state => state.publicUrl)
	const [url, setUrl] = useState<string>()

	useEffect(() => {
		publicUrl(image).then(res => {
			setUrl(res.data.publicUrl)
		})
	}, [publicUrl, image])

	return (
		<>
			<div className='flex text-center items-center justify-center'>
				<Card>
					<CardHeader>
						<h2 className='text-2xl font-bold'>{image}</h2>
					</CardHeader>
					<CardBody>
						<Image src={url} width={850} />
					</CardBody>
				</Card>
			</div>
		</>
	)
}
