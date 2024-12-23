import { publicUrl } from '@entities/images'
import { rootRoute } from '@pages/Root'
import { createRoute } from '@tanstack/react-router'
import { Images } from './Images'
import { ROUTES } from '@shared/lib'

export const imagesRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: ROUTES.IMAGES,
	loader: async ({ params: { imageId } }) => {
		const image = await publicUrl(imageId).then(res => res.data.publicUrl)
		return { image }
	},
	component: Images
})
