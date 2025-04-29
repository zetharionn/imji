'use client'

import { storage } from '@shared/api'
import { useSuspenseQuery } from '@tanstack/react-query'
import * as v from 'valibot'
import { UrlSchema } from '../../model'

export const useRetrieve = (path: string) =>
	useSuspenseQuery({
		queryKey: ['retrieve'],
		queryFn: async () => {
			const { data } = await storage.retrieve(path)
			return v.parse(UrlSchema, data?.publicUrl)
		},
		retry: false
	})
