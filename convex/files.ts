import { bufferToFile } from '@convex/lib'
import { ConvexError, v } from 'convex/values'
import * as valibot from 'valibot'
import { internal } from './_generated/api'
import { action, internalMutation } from './_generated/server'
import type { UploadResponse } from './files.types'
import { FileSchema } from './model'

export const upload = action({
	args: { buffer: v.bytes() },
	handler: async (ctx, args) => {
		const result = valibot.safeParse(
			FileSchema,
			await bufferToFile(args.buffer)
		)
		const url = await ctx.runMutation(internal.files.url)

		if (!result.success) {
			const messages = result.issues.map(issue => issue.message).join()
			throw new ConvexError(messages)
		}

		const response = await fetch(url, { method: 'POST', body: result.output })

		if (!response.ok) {
			throw new Error(response.statusText)
		}

		const { storageId } = (await response.json()) as UploadResponse
		await ctx.runMutation(internal.files.store, { id: storageId })
		return { id: storageId }
	}
})

export const retrieve = action({
	args: { id: v.string() },
	handler: async (ctx, args) => await ctx.storage.getUrl(args.id)
})

export const url = internalMutation({
	handler: async ctx => await ctx.storage.generateUploadUrl()
})

export const store = internalMutation({
	args: { id: v.string() },
	handler: async (ctx, args) => await ctx.db.insert('files', { id: args.id })
})
