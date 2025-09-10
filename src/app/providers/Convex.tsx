'use client'

import { convexClient } from '@shared/api'
import { ConvexProvider } from 'convex/react'
import type { FC, PropsWithChildren } from 'react'

export const Convex: FC<PropsWithChildren> = ({ children }) => {
	return <ConvexProvider client={convexClient}>{children}</ConvexProvider>
}
