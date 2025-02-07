import { Outlet } from '@tanstack/react-router'
import { Head } from '@widgets/head'
import { Nav } from '@widgets/nav'
import { Devtools, withProviders } from '../lib'

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
