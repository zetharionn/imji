import { Outlet } from '@tanstack/react-router'
import { Nav } from '@widgets/nav'
import { Devtools, withProviders } from '../lib'

const Root = () => {
	return (
		<>
			<Nav />
			<Outlet />
			<Devtools />
		</>
	)
}

export default withProviders(Root)
