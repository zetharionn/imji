import { RouterProvider, createRouter } from '@tanstack/react-router'
import { rootRoute } from '@pages/Root'
import { homeRoute } from '@pages/Home'
import { notFoundRoute } from '@pages/NotFound'

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

const routeTree = rootRoute.addChildren([homeRoute])

const router = createRouter({ routeTree, notFoundRoute })

export const Routing = () => {
	return <RouterProvider router={router} />
}
