import Loader from '@pages/loader'
import { rootRoute } from '@pages/root'
import { ROUTES } from '@shared/constants'
import { withSuspense } from '@shared/hocs'
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
