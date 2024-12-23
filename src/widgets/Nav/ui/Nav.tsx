import { Image, Link, Navbar, NavbarBrand, NavbarItem } from '@nextui-org/react'
import { ROUTES } from '@shared/lib'
import { gitHubMark } from '@shared/ui'

export const Nav = () => {
	return (
		<Navbar>
			<NavbarBrand className='flex flex-row gap-4'>
				<Link color='foreground' href={ROUTES.HOME}>
					<Image alt='Imji' src='/imji-mark.svg' width={50} height={50} />
					<h1 className='md:text-2xl lg:text-3xl font-bold'>Imji</h1>
				</Link>
			</NavbarBrand>
			<NavbarItem>
				<Link
					color='foreground'
					isExternal
					href='https://github.com/zetharionn/imji'
				>
					<Image alt='GitHub' src={gitHubMark} width={50} height={50} />
				</Link>
			</NavbarItem>
		</Navbar>
	)
}
