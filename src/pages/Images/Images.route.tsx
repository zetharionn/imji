import { publicUrl } from '@entities/images'
import { rootRoute } from '@pages/Root'
import { createRoute } from '@tanstack/react-router'
import { Images } from './Images'

export const imagesRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/images/$imageId',
	loader: async ({ params: { imageId } }) => {
		const image = await publicUrl(imageId).then(res => res.data.publicUrl)
		return { image }
	},
	component: Images
})
