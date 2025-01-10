import { rootRoute } from '@pages/Root'
import { ROUTES } from '@shared/lib'
import { createRoute } from '@tanstack/react-router'
import Home from './Home'

export const homeRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: ROUTES.HOME,
	component: Home
})
