import { BUCKET, storage } from '@entities/storage'

export const upload = async (file: File) =>
	await storage.createFile(BUCKET, crypto.randomUUID(), file)
