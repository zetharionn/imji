import { Outlet } from '@tanstack/react-router'
import { Nav } from '@widgets/nav'
import { Devtools, withProviders } from '../lib'
import { Head } from '@widgets/head'

const Root = () => {
	return (
		<>
			<Head />
			<Nav />
			<Outlet />
			<Devtools />
		</>
	)
}

export default withProviders(Root)
