import type { FC, PropsWithChildren } from 'react'
import { HeroUI } from './HeroUI'
import { Query } from './Query'

export const Providers: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Query>
			<HeroUI>{children}</HeroUI>
		</Query>
	)
}
