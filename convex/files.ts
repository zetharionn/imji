import { bufferToFile } from '@convex/lib'
import { v } from 'convex/values'
import * as valibot from 'valibot'
import { internal } from './_generated/api'
import { action, internalMutation } from './_generated/server'
import { FileSchema } from './model'

export const upload = action({
	args: { buffer: v.bytes() },
	handler: async (ctx, args) => {
		const result = valibot.safeParse(
			FileSchema,
			await bufferToFile(args.buffer)
		)
		const url = await ctx.runMutation(internal.files.url)

		result.success &&
			(await fetch(url, {
				method: 'POST',
				body: result.output
			}).then(async response => {
				const { storageId } = await response.json()
				await ctx.runMutation(internal.files.store, { id: storageId })
			}))
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
