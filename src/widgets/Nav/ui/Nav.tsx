import { Image, Link, Navbar, NavbarBrand, NavbarItem } from '@nextui-org/react'
import { ROUTES } from '@shared/lib'

export const Nav = () => {
	return (
		<Navbar>
			<NavbarBrand>
				<Link
					color='foreground'
					href={ROUTES.HOME}
					className='flex flex-row gap-2'
				>
					<Image alt='Imji' src='/imji-mark.svg' width={50} height={50} />
					<h1 className='md:text-2xl lg:text-3xl font-bold'>Imji</h1>
				</Link>
			</NavbarBrand>
			<NavbarItem>
				<Link
					color='foreground'
					isExternal
					showAnchorIcon
					href='https://github.com/zetharionn/imji'
					className='md:text-xl lg:text-2xl font-bold'
				>
					GitHub
				</Link>
			</NavbarItem>
		</Navbar>
	)
}
