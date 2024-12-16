import { Outlet } from '@tanstack/react-router'
import { Devtools, withProviders } from './lib'
import { Nav } from '@widgets/Nav'

export const Root = withProviders(() => {
	return (
		<>
			<Nav />
			<Outlet />
			<Devtools />
		</>
	)
})
