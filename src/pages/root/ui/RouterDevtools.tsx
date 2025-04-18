import { Suspense, lazy, memo } from 'react'

export const RouterDevtools = memo(() => {
	const Devtools = import.meta.env.DEV
		? lazy(() =>
				import('@tanstack/react-router-devtools').then(res => ({
					default: res.TanStackRouterDevtools
				}))
			)
		: () => null

	return (
		<Suspense>
			<Devtools />
		</Suspense>
	)
})
