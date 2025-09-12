import { BUCKET } from '@entities/storage'
import { storage } from '../instance'

export const upload = async (file: File) =>
	await storage.createFile(BUCKET, crypto.randomUUID(), file)
