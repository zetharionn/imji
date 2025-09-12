import { BUCKET, storage } from '@entities/storage'

export const retrieve = async (fileId: string) =>
	storage.getFileView(BUCKET, fileId)
