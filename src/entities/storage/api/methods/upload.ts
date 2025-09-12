import { FileSchema } from '@entities/file'
import { BUCKET, storage } from '@entities/storage'
import * as v from 'valibot'

export const upload = async (file: File) =>
	await storage.createFile(
		BUCKET,
		crypto.randomUUID(),
		v.parse(FileSchema, file)
	)
