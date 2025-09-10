'use client'

import type { FC, PropsWithChildren } from 'react'
import { Convex } from './Convex'
import { HeroUI } from './HeroUI'
import { Query } from './Query'
import { Toast } from './Toast'

export const Providers: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Convex>
			<Query>
				<HeroUI>
					<Toast />
					{children}
				</HeroUI>
			</Query>
		</Convex>
	)
}
