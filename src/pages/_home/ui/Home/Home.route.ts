import { Loader } from '@pages/_loader'
import { rootRoute } from '@pages/_root'
import { ROUTES, withSuspense } from '@shared/lib'
import { createRoute } from '@tanstack/react-router'
import { lazy } from 'react'

export const homeRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: ROUTES.HOME,
	component: withSuspense(
		lazy(async () => import('./Home')),
		Loader
	)
})
