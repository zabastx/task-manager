<template>
	<UCard
		variant="soft"
		class="w-80"
		:ui="{ body: 'flex flex-col gap-2.5', header: 'p-2' }"
	>
		<template #header>
			<h1>Авторизация</h1>
		</template>
		<LoginEmail />
		<USeparator label="Войти через:" />
		<UButton
			class="cursor-pointer justify-center"
			icon="mdi:github"
			label="GitHub"
			loading-auto
			@click="githubSignIn"
		/>
	</UCard>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'auth',
})

const supabase = useSupabaseClient()

async function githubSignIn() {
	const { error } = await supabase.auth.signInWithOAuth({ provider: 'github', options: { redirectTo: window.location.origin + '/confirm' } })
	if (error) console.log(error)
}
</script>
