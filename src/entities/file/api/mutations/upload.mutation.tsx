'use client'

import { storage } from '@shared/api'
import { useMutation } from '@tanstack/react-query'
import * as v from 'valibot'
import { FileSchema } from '../../model'
import { addToast, Link } from '@heroui/react'

export const useUpload = () =>
	useMutation({
		mutationKey: ['upload'],
		mutationFn: async (file: File) =>
			await storage.upload(crypto.randomUUID(), v.parse(FileSchema, file)),
		onSuccess: ({ data }) =>
			addToast({
				variant: 'flat',
				color: 'success',
				title: 'Success',
				description: 'Successfully uploaded',
				endContent: <Link href={`i/${data?.path}`}>{data?.path}</Link>
			}),
		onError: ({ message }) =>
			addToast({
				variant: 'flat',
				color: 'danger',
				title: 'Error',
				description: message
			})
	})
