import {
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	Image,
	useDisclosure
} from '@heroui/react'
import { bolt, darkBolt } from '@shared/ui'

export const Toolkit = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	return (
		<>
			<Button
				isIconOnly
				size='lg'
				onPress={onOpen}
				className='absolute bottom-10 right-10 z-10'
			>
				<Image src={darkBolt} />
			</Button>
			<Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
				<DrawerContent>
					<DrawerHeader className='items-center'>
						<Image src={bolt} />
						<h1>Toolkit</h1>
					</DrawerHeader>
					<DrawerBody>
						<p>Coming soon...</p>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	)
}
