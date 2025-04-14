import { lazy, memo, Suspense } from 'react'

export const Devtools = memo(() => {
	const Devtool =
		process.env.NODE_ENV &&
		lazy(() =>
			import('@tanstack/react-query-devtools').then(res => ({
				default: res.ReactQueryDevtools
			}))
		)

	return (
		<Suspense>
			<Devtool />
		</Suspense>
	)
})
