import { homeRoute } from '@pages/Home'
import { notFoundRoute } from '@pages/NotFound'
import { rootRoute } from '@pages/Root'
import { RouterProvider, createRouter } from '@tanstack/react-router'

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

const routeTree = rootRoute.addChildren([homeRoute])
const router = createRouter({ routeTree, notFoundRoute })
export const Routing = () => <RouterProvider router={router} />
