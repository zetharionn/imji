import * as v from 'valibot'

export const ImageSchema = v.pipe(
	v.file('Upload a file'),
	v.mimeType(
		[
			'image/apng',
			'image/avif',
			'image/gif',
			'image/jpeg',
			'image/png',
			'image/svg+xml',
			'image/webp'
		],
		'Upload a file with type image'
	),
	v.maxSize(1024 * 1024 * 10, 'Upload a file with size less than 10 MB')
)
