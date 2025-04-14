'use client'

import { HeroUIProvider } from '@heroui/react'
import type { FC, PropsWithChildren } from 'react'

export const HeroUI: FC<PropsWithChildren> = ({ children }) => {
	return <HeroUIProvider>{children}</HeroUIProvider>
}
