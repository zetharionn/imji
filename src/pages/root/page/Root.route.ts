import NotFound from '@pages/not-found'
import { createRootRoute } from '@tanstack/react-router'
import Root from './Root'

export const rootRoute = createRootRoute({
	component: Root,
	notFoundComponent: NotFound
})
