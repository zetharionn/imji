import { BUCKET, storage } from '@entities/storage'

export const retrieve = (fileId: string) => storage.getFileView(BUCKET, fileId)
