import { lazy, Suspense } from 'react'

const RouterDevtools =
	process.env.NODE_ENV === 'production'
		? () => null
		: lazy(() =>
				import('@tanstack/router-devtools').then(res => ({
					default: res.TanStackRouterDevtools
				}))
			)

const QueryDevtools =
	process.env.NODE_ENV === 'production'
		? () => null
		: lazy(() =>
				import('@tanstack/react-query-devtools').then(res => ({
					default: res.ReactQueryDevtools
				}))
			)

export const Devtools = () => {
	return (
		<Suspense>
			<RouterDevtools />
		</Suspense>
	)
}
