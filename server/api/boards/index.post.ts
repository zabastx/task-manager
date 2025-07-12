import type { Database } from '~/database.types'
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient<Database>(event)
	const body = await readBody<CreateBoardPayload>(event)

	if (!body.title) throw createError({
		statusCode: 401,
		message: 'title is required'
	})

	const { data } = await client.from('boards').insert(body)
	return data
})

interface CreateBoardPayload {
	title: string
}
