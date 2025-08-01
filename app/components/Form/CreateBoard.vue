<template>
	<UForm
		:schema="schema"
		:state="state"
		class="flex flex-col gap-4 p-2.5"
		loading-auto
		@submit="onSubmit"
	>
		<UFormField
			label="Название"
			name="title"
			required
		>
			<UInput v-model="state.title" />
		</UFormField>

		<UButton
			type="submit"
			label="Создать"
			class="cursor-pointer justify-center"
		/>
	</UForm>
</template>

<script lang="ts" setup>
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const emit = defineEmits<{
	created: []
}>()

const schema = z.object({
	title: z.string()
})

type BoardCreateSchema = z.output<typeof schema>

const state = reactive<BoardCreateSchema>({
	title: '',
})

function onSubmit(event: FormSubmitEvent<BoardCreateSchema>) {
	$fetch<Response>('/api/boards', { method: 'POST', body: event.data }).then(() => {
		state.title = ''
		emit('created')
	})
}
</script>
