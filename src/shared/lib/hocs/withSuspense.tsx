import { type ComponentType, Suspense } from 'react'

export const withSuspense =
	<T extends object>(
		Component: ComponentType<T>,
		LoaderComponent: ComponentType
	) =>
	(props: T) => (
		<Suspense fallback={<LoaderComponent />}>
			<Component {...props} />
		</Suspense>
	)
