import type { Database } from '~/server/types/database'
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient<Database>(event)
	const id = getRouterParam(event, 'id')

	if (!id) throw createError({
		statusCode: 401,
		message: 'id is required'
	})

	const { error } = await client.from('boards').delete().eq('id', id)

	if (error) throw createError({ message: error.message })

	return new Response(null, { status: 204 })
})
