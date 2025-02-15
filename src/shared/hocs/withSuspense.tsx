import { type ComponentType, Suspense } from 'react'

export const withSuspense =
	<T extends object>(Component: ComponentType<T>, Fallback: ComponentType) =>
	(props: T) => (
		<Suspense fallback={<Fallback />}>
			<Component {...props} />
		</Suspense>
	)
