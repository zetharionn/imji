import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from '@tanstack/react-router'
import type { ComponentType } from 'react'

export const NextUI = (Component: ComponentType) => () => {
	const router = useRouter()

	return (
		<NextUIProvider
			navigate={to => router.navigate({ to })}
			useHref={to => router.buildLocation({ to }).href}
		>
			<Component />
		</NextUIProvider>
	)
}
