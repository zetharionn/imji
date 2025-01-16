import { ROUTES } from '@shared/lib'
import { getRouteApi } from '@tanstack/react-router'
import { Toolkit } from '@widgets/Toolkit'
import { Viewer } from '@widgets/Viewer'

const imagesRoute = getRouteApi(`${ROUTES.IMAGES}/$path`)

const Images = () => {
	const path = imagesRoute.useLoaderData()

	return (
		<div className='h-[80vh] flex text-center items-center justify-center'>
			<Viewer path={path} />
			<Toolkit />
		</div>
	)
}

export default Images
