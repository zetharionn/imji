import { useRetrieve, useRetrieveState } from '@entities/image'
import { ROUTES } from '@shared/lib'
import { getRouteApi } from '@tanstack/react-router'
import { Viewer } from '@widgets/Viewer'

const imagesRoute = getRouteApi(`${ROUTES.IMAGES}/$path`)

const Images = () => {
	const path = imagesRoute.useLoaderData()
	const url = useRetrieve(path)
	const { status } = useRetrieveState()

	return (
		<div className='h-[80vh] flex text-center items-center justify-center'>
			<Viewer url={url} isLoading={status === 'pending'} />
		</div>
	)
}

export default Images
