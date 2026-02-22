import { UploadButton } from '@features/upload-button'
import { UploadZone } from '@features/upload-zone'

export const Uploader = () => {
	return (
		<div className='flex flex-col flex-wrap w-[25vw] gap-3'>
			<UploadZone />
			<UploadButton />
		</div>
	)
}
