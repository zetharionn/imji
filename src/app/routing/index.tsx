import { homeRoute } from '@pages/home'
import { imagesRoute } from '@pages/images'
import { rootRoute } from '@pages/root'
import { RouterProvider, createRouter } from '@tanstack/react-router'

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

const routeTree = rootRoute.addChildren([homeRoute, imagesRoute])
const router = createRouter({ routeTree })
export const Routing = () => <RouterProvider router={router} />
