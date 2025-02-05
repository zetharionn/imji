import { Suspense, lazy } from 'react'

const RouterDevtools = import.meta.env.DEV
	? lazy(() =>
			import('@tanstack/router-devtools').then(res => ({
				default: res.TanStackRouterDevtools
			}))
		)
	: () => null

const QueryDevtools = import.meta.env.DEV
	? lazy(() =>
			import('@tanstack/react-query-devtools').then(res => ({
				default: res.ReactQueryDevtools
			}))
		)
	: () => null

export const Devtools = () => {
	return (
		<Suspense>
			<RouterDevtools />
			<QueryDevtools />
		</Suspense>
	)
}
