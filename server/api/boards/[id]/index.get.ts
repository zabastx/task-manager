import { serverSupabaseClient } from '#supabase/server'
import type { Database } from '~~/server/types/database'

export default defineEventHandler(async (event) => {
	const id = getRouterParam(event, 'id')
	if (!id) return sendRedirect(event, '/', 400)

	const client = await serverSupabaseClient<Database>(event)
	const { data, error } = await client.from('boards').select('*').eq('id', id).single()

	if (error) throw createError({
		statusCode: 400,
		statusMessage: 'Bad Request',
		message: 'Failed to fetch board',
		data: { field: 'id' }
	})

	return data
})
