import Fallback from '@pages/fallback'
import { ErrorBoundary } from '@shared/ui'
import type { FC } from 'react'

export const Boundary = (Component: FC) => () => {
	return (
		<ErrorBoundary fallback={Fallback}>
			<Component />
		</ErrorBoundary>
	)
}
