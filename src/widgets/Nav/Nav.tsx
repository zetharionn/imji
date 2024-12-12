import { Navbar, NavbarBrand, Image, NavbarItem, Link } from '@nextui-org/react'
import { gitHubMark } from '@shared/ui'

export const Nav = () => {
	return (
		<Navbar>
			<NavbarBrand>
				<Image
					alt='Imji'
					src='/imji-mark.svg'
					className='sm:w-4 md:w-8 lg:w-12'
				/>
			</NavbarBrand>
			<NavbarItem>
				<Link href='https://github.com/zetharionn/imji'>
					<Image
						alt='GitHub'
						src={gitHubMark}
						className='sm:w-4 md:w-8 lg:w-12'
					/>
				</Link>
			</NavbarItem>
		</Navbar>
	)
}
