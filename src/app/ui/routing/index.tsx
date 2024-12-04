import { rootRoute } from '@pages/Root'
import { RouterProvider, createRouter } from '@tanstack/react-router'

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

const routeTree = rootRoute.addChildren([])

const router = createRouter({ routeTree })

export const Routing = () => {
	return <RouterProvider router={router} />
}
