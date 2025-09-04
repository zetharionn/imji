import Images from '@views/images'

const Page = async ({ params }: { params: Promise<{ path: string }> }) => {
	const { path } = await params

	return <Images path={path} />
}

export default Page
