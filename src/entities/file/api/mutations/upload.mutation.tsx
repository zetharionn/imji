'use client'

import { api } from '@convex/_generated/api'
import { addToast, Link } from '@heroui/react'
import { useMutation } from '@tanstack/react-query'
import { useAction } from 'convex/react'

export const useUpload = () => {
	const upload = useAction(api.files.upload)

	return useMutation({
		mutationKey: ['upload'],
		mutationFn: async (file: File) => {
			const buffer = await file.arrayBuffer()
			return await upload({ buffer })
		},
		onSuccess: ({ id }) =>
			addToast({
				variant: 'flat',
				color: 'success',
				title: 'Success',
				description: 'Successfully uploaded',
				endContent: <Link href={`i/${id}`}>{id}</Link>
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
