import { useRetrieve } from '@entities/image'
import { ImageCard } from '@features/ImageCard'
import { ROUTES } from '@shared/lib'
import { getRouteApi } from '@tanstack/react-router'

const imagesRoute = getRouteApi(`${ROUTES.IMAGES}/$path`)

export const Images = () => {
	const path = imagesRoute.useLoaderData()
	const url = useRetrieve(path)

	return (
		<div className='h-[80vh] flex text-center items-center justify-center'>
			<div>{url ? <ImageCard url={url} /> : <h2>Not Found</h2>}</div>
		</div>
	)
}
