import { rootRoute } from '@pages/Root'
import { ROUTES } from '@shared/lib'
import { createRoute } from '@tanstack/react-router'
import { Images } from './Images'

export const imagesRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: `${ROUTES.IMAGES}/$imageId`,
	component: Images
})
