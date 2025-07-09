<template>
	<UForm
		:state="state"
		:schema="schema"
		loading-auto
		class="gap-4 flex flex-col"
		@submit="onSubmit"
	>
		<UFormField
			label="Email"
			name="email"
			valid
		>
			<UInput
				v-model="state.email"
				class="w-full"
				placeholder="example@mail.com"
			/>
		</UFormField>
		<UButton
			type="submit"
			class="cursor-pointer w-full justify-center"
			icon="mdi:email"
			label="Войти через email"
			loading-auto
		/>
	</UForm>
</template>

<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'
import * as z from 'zod'

const supabase = useSupabaseClient()

const schema = z.object({
	email: z.string().nonempty('Заполните поле').email('Неверный email')
})

type Schema = z.output<typeof schema>

const state = reactive<Schema>({
	email: ''
})

const toast = useToast()

async function onSubmit({ data: { email } }: FormSubmitEvent<Schema>) {
	const { error } = await supabase.auth.signInWithOtp({ email, options: {
		emailRedirectTo: 'http://localhost:3000/confirm',
	} })
	if (error) {
		toast.add({ description: error.message, color: 'error' })
		return
	}
	toast.add({ description: `Ссылка для входа отправлена на ${email}`, color: 'success' })
	state.email = ''
}
</script>
