import { rootRoute } from '@pages/Root'
import { NotFoundRoute } from '@tanstack/react-router'
import { NotFound } from './NotFound'

export const notFoundRoute = new NotFoundRoute({
	getParentRoute: () => rootRoute,
	component: NotFound
})
