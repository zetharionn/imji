import { type FileTypeResult, fileTypeFromBuffer } from 'file-type'

export const bufferToFile = async (buffer: ArrayBuffer) => {
	const { mime } = (await fileTypeFromBuffer(buffer)) as FileTypeResult
	return new File([buffer], crypto.randomUUID(), {
		type: mime
	})
}
