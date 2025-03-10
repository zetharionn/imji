import { ROUTES } from '@shared/constants'
import { getRouteApi } from '@tanstack/react-router'
import { Toolkit } from '@widgets/toolkit'
import { Viewer } from '@widgets/viewer'

const imagesRoute = getRouteApi(`${ROUTES.IMAGES}/$path`)

const Images = () => {
	const path = imagesRoute.useLoaderData()

	return (
		<>
			<title>{`Imji | ${path}`}</title>
			<div className='h-dvh flex flex-col items-center justify-center text-center gap-5'>
				<Viewer path={path} />
				<Toolkit />
			</div>
		</>
	)
}

export default Images
