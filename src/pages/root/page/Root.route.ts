import { createRootRoute } from '@tanstack/react-router'
import Root from './Root'
import NotFound from '@pages/not-found'

export const rootRoute = createRootRoute({
	component: Root,
	notFoundComponent: NotFound
})
