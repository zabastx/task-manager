import type { Database } from '~~/server/types/database'
import { serverSupabaseClient } from '#supabase/server'

defineRouteMeta({
	openAPI: {
		tags: ['Доски'],
		description: 'Получение списка досок пользователя',
		summary: 'Список досок'
	},
})

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient<Database>(event)
	const { data } = await client.from('boards').select('*')
	return data
})
