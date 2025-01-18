import { ROUTES } from '@shared/lib'
import { getRouteApi } from '@tanstack/react-router'
import { Toolkit } from '@widgets/Toolkit'
import { Viewer } from '@widgets/Viewer'

const imagesRoute = getRouteApi(`${ROUTES.IMAGES}/$path`)

const Images = () => {
	const path = imagesRoute.useLoaderData()

	return (
		<div className='h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center gap-5'>
			<Viewer path={path} />
			<Toolkit />
		</div>
	)
}

export default Images
