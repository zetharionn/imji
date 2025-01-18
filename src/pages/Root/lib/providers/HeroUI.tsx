import { HeroUIProvider } from '@heroui/react'
import { useRouter } from '@tanstack/react-router'
import type { FC } from 'react'

export const HeroUI = (Component: FC) => () => {
	const router = useRouter()

	return (
		<HeroUIProvider
			navigate={(to, options) => router.navigate({ to, ...(options ?? {}) })}
			useHref={to => router.buildLocation({ to }).href}
		>
			<Component />
		</HeroUIProvider>
	)
}
