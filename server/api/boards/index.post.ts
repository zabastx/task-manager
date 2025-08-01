import type { Database } from '~~/server/types/database'
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler<{ body: CreateBoardPayload }>(async (event) => {
	const client = await serverSupabaseClient<Database>(event)
	const body = await readBody<CreateBoardPayload>(event)

	if (!body.title) throw createError({
		statusCode: 401,
		message: 'title is required'
	})

	const { error } = await client.from('boards').insert(body)

	if (error) throw createError({
		statusCode: 500,
		message: error.message
	})

	return {
		status: 201,
		message: `Доска "${body.title}" создана`
	}
})

interface CreateBoardPayload {
	title: string
}

defineRouteMeta({
	openAPI: {
		tags: ['Доски'],
		summary: 'Создание новой доски',
		requestBody: {
			required: true,
			content: {
				'application/json': {
					schema: {
						type: 'object',
						properties: {
							title: {
								type: 'string',
								description: 'Название доски',
							},
						},
						required: ['title']
					}
				}
			}
		},
		responses: {
			201: {
				description: 'Доска создана',
				content: {
					'application/json': {
						schema: {
							type: 'object',
							properties: {
								status: {
									type: 'integer',
								},
								message: {
									type: 'string',
									description: 'Сообщение об успешном создании доски',
								}
							}
						}
					}
				}
			},
			401: {
				description: 'Неверный запрос',
				content: {
					'application/json': {
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Сообщение об ошибке',
								}
							}
						}
					}
				}
			}
		}
	},
})
