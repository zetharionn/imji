import { HeroUIProvider } from '@heroui/react'
import { useRouter } from '@tanstack/react-router'
import type { FC } from 'react'

export const NextUI = (Component: FC) => () => {
	const router = useRouter()

	return (
		<HeroUIProvider
			navigate={to => router.navigate({ to })}
			useHref={to => router.buildLocation({ to }).href}
		>
			<Component />
		</HeroUIProvider>
	)
}
