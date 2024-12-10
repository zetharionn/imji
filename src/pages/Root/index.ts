import { createRootRoute } from '@tanstack/react-router'
import { Root } from './Root'

export * from './Root'
export const rootRoute = createRootRoute({
	component: Root
})
