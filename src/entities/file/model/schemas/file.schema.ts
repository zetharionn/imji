import * as v from 'valibot'

export const FileSchema = v.pipe(
	v.file('Invalid query'),
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
		'Invalid file type'
	),
	v.maxSize(1024 * 1024 * 10, 'Invalid file size')
)
