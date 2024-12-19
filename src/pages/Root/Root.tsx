import { Outlet } from '@tanstack/react-router'
import { Nav } from '@widgets/Nav'
import { Devtools, withProviders } from './lib'

export const Root = withProviders(() => {
	return (
		<>
			<Nav />
			<Outlet />
			<Devtools />
		</>
	)
})
