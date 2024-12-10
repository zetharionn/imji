import { Outlet } from '@tanstack/react-router'
import { withProviders } from './lib'

export const Root = withProviders(() => {
	return <Outlet />
})
