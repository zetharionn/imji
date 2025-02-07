import { Outlet } from '@tanstack/react-router'
import { Head } from '@widgets/head'
import { Nav } from '@widgets/nav'
import { withProviders } from '../lib'
import { Devtools } from '../ui'

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
