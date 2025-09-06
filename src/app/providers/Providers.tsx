'use client'

import { ToastProvider } from '@heroui/react'
import type { FC, PropsWithChildren } from 'react'
import { Convex } from './Convex'
import { HeroUI } from './HeroUI'
import { Query } from './Query'

export const Providers: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Convex>
			<Query>
				<HeroUI>
					<ToastProvider placement='bottom-center' />
					{children}
				</HeroUI>
			</Query>
		</Convex>
	)
}
