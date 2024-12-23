import { rootRoute } from '@pages/Root'
import { createRoute } from '@tanstack/react-router'
import { Home } from './Home'
import { ROUTES } from '@shared/lib'

export const homeRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: ROUTES.HOME,
	component: Home
})
