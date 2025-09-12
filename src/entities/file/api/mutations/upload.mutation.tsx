'use client'

import { upload } from '@entities/storage'
import { addToast, Link } from '@heroui/react'
import { useMutation } from '@tanstack/react-query'

export const useUpload = () => {
	return useMutation({
		mutationKey: ['upload'],
		mutationFn: (file: File) => upload(file),
		onSuccess: file =>
			addToast({
				variant: 'flat',
				color: 'success',
				title: 'Success',
				description: 'Successfully uploaded',
				endContent: <Link href={`i/${file.$id}`}>{file.$id}</Link>
			}),
		onError: ({ message }) =>
			addToast({
				variant: 'flat',
				color: 'danger',
				title: 'Error',
				description: message
			})
	})
}
