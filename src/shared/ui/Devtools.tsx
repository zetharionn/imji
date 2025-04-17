import { Suspense, lazy, memo } from 'react'

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
			<Devtool buttonPosition='bottom-left' position='left' />
		</Suspense>
	)
})
