import { rootRoute } from '@pages/Root'
import { createRoute } from '@tanstack/react-router'
import { Images } from './Images'

export const imagesRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/images/$image',
	component: Images
})
