import * as valibot from 'valibot'
import { ALLOWED_FILE_TYPES, MAX_FILE_SIZE } from '../constants'

export const FileSchema = valibot.pipe(
	valibot.file('Invalid mutation'),
	valibot.mimeType(ALLOWED_FILE_TYPES, 'Invalid file type'),
	valibot.maxSize(MAX_FILE_SIZE, 'Invalid file size')
)
