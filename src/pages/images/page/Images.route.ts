import Loader from '@pages/loader'
import { rootRoute } from '@pages/root'
import { ROUTES } from '@shared/constants'
import { withSuspense } from '@shared/lib'
import { createRoute } from '@tanstack/react-router'
import { lazy } from 'react'

export const imagesRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: `${ROUTES.IMAGES}/$path`,
	component: withSuspense(
		lazy(async () => import('./Images')),
		Loader
	),
	loader: ({ params: { path } }) => path
})
