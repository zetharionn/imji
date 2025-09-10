import { ConvexQueryClient } from '@convex-dev/react-query'
import { ConvexReactClient } from 'convex/react'

export const convexClient = new ConvexReactClient(
	process.env.NEXT_PUBLIC_CONVEX_URL
)
export const convexQueryClient = new ConvexQueryClient(convexClient)
