import { homeRoute } from '@pages/home'
import { imagesRoute } from '@pages/images'
import { notFoundRoute } from '@pages/not-found'
import { rootRoute } from '@pages/_root'
import { RouterProvider, createRouter } from '@tanstack/react-router'

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

const routeTree = rootRoute.addChildren([homeRoute, imagesRoute])
const router = createRouter({ routeTree, notFoundRoute })
export const Routing = () => <RouterProvider router={router} />
