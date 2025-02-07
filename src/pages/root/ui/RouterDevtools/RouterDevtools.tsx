import { lazy, memo, Suspense } from 'react'

export const RouterDevtools = memo(() => {
	const Devtools = import.meta.env.DEV
		? lazy(() =>
				import('@tanstack/router-devtools').then(res => ({
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
