import { publicUrl } from '@entities/images'
import { rootRoute } from '@pages/Root'
import { ROUTES } from '@shared/lib'
import { createRoute } from '@tanstack/react-router'
import { Images } from './Images'

export const imagesRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: `${ROUTES.IMAGES}/$imageId`,
	loader: async ({ params: { imageId } }) => {
		const imageUrl = await publicUrl(imageId).then(res => res.data.publicUrl)
		return { imageId, imageUrl }
	},
	component: Images
})
