'use client'

import type { FC, PropsWithChildren } from 'react'
import { HeroUIProvider } from '@heroui/react'

export const HeroUI: FC<PropsWithChildren> = ({ children }) => {
	return <HeroUIProvider>{children}</HeroUIProvider>
}
