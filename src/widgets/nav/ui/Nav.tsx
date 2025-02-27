import {
	Image,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem
} from '@heroui/react'
import { ROUTES } from '@shared/constants'
import { imjiMark } from '@shared/ui'

export const Nav = () => {
	return (
		<Navbar isBordered maxWidth='full' className='absolute'>
			<NavbarBrand>
				<Link
					color='foreground'
					href={ROUTES.HOME}
					className='flex flex-row gap-2'
				>
					<Image src={imjiMark} width={50} height={50} />
					<h1 className='md:text-xl lg:text-2xl text-primary'>Imji</h1>
				</Link>
			</NavbarBrand>
			<NavbarContent justify='end'>
				<NavbarItem>
					<Link
						color='foreground'
						isExternal
						href='https://github.com/zetharionn/imji'
						className='md:text-xl lg:text-2xl text-secondary-50'
					>
						GitHub
					</Link>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	)
}
