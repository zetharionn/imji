import { NextUIProvider } from '@nextui-org/react'
import type { ComponentType } from 'react'

export const NextUI = (Component: ComponentType) => () => {
	return (
		<NextUIProvider>
			<Component />
		</NextUIProvider>
	)
}
