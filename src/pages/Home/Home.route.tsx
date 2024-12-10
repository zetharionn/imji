import { rootRoute } from '@pages/Root'
import { createRoute } from '@tanstack/react-router'
import { Home } from './Home'

export const homeRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: Home
})
