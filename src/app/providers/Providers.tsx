'use client'

import type { FC, PropsWithChildren } from 'react'
import { HeroUI } from './HeroUI.tsx'
import { Query } from './Query.tsx'
import { Toast } from './Toast.tsx'

export const Providers: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Query>
			<HeroUI>
				<Toast />
				{children}
			</HeroUI>
		</Query>
	)
}
