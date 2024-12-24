import * as v from 'valibot'

export const ImagesSchema = v.pipe(
	v.file('Please upload a file'),
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
		'Please upload an image file'
	),
	v.maxSize(1024 * 1024 * 10, 'Please upload a file smaller than 10 MB')
)

export type ImagesSchemaType = v.InferOutput<typeof ImagesSchema>
