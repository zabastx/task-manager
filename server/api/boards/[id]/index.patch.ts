import type { Database } from '~/database.types'
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient<Database>(event)
	const body = await readBody<PatchBoardPayload>(event)

	if (!body.title) throw createError({
		statusCode: 401,
		message: 'title is required'
	})

	const { data } = await client.from('boards').update(body)
	return data
})

interface PatchBoardPayload {
	title: string
}
