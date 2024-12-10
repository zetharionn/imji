import { Outlet } from '@tanstack/react-router'
import { Devtools, withProviders } from './lib'

export const Root = withProviders(() => {
	return (
		<>
			<Outlet />
			<Devtools />
		</>
	)
})
