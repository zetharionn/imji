import { rootRoute } from '@pages/Root'
import { createRoute } from '@tanstack/react-router'
import { Images } from './Images'
import { storageService } from '@shared/services'

export const imagesRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/images/$imageId',
	loader: async ({ params: { imageId } }) => {
		const image = await storageService
			.publicUrl('images', imageId)
			.then(res => res.data.publicUrl)
		return { image }
	},
	component: ({ image }) => {
		return <Images image={image} />
	}
})
