<template>
	<UContainer
		as="header"
		class="flex py-2.5 items-center gap-2.5 justify-end"
	>
		<AppLogo class="mr-auto" />
		<AppNavigation />
		<UAvatar
			v-if="user"
			:src="user.user_metadata.avatar_url"
			alt="avatar"
		/>
		<ColorModeButton />
		<UButton
			class="cursor-pointer"
			icon="mdi:logout"
			label="Выйти"
			variant="ghost"
			color="neutral"
			loading-auto
			@click="signOut"
		/>
	</UContainer>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()

async function signOut() {
	const { error } = await supabase.auth.signOut()
	if (!error) navigateTo('/login')
}
</script>
