import { Loader } from '@pages/Loader'
import { rootRoute } from '@pages/Root'
import { ROUTES, withSuspense } from '@shared/lib'
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
