import { Image, Link, Navbar, NavbarBrand, NavbarItem } from '@nextui-org/react'
import { gitHubMark } from '@shared/ui'

export const Nav = () => {
	return (
		<Navbar>
			<NavbarBrand className='flex flex-row gap-4'>
				<Image
					alt='Imji'
					src='/imji-mark.svg'
					className='sm:w-2 md:w-8 lg:w-12'
				/>
				<h1 className='md:text-2xl lg:text-3xl font-bold'>Imji</h1>
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
