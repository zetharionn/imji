import { rootRoute } from '@pages/root'
import { NotFoundRoute } from '@tanstack/react-router'
import NotFound from './NotFound'

export const notFoundRoute = new NotFoundRoute({
	getParentRoute: () => rootRoute,
	component: NotFound
})
