import { Suspense, lazy, memo } from 'react'

export const QueryDevtools = memo(() => {
	const Devtools = import.meta.env.DEV
		? lazy(() =>
				import('@tanstack/react-query-devtools').then(res => ({
					default: res.ReactQueryDevtools
				}))
			)
		: () => null

	return (
		<Suspense>
			<Devtools />
		</Suspense>
	)
})
