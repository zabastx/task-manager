<script setup lang="ts">
definePageMeta({
	layout: 'auth'
})

const user = useSupabaseUser()

watch(user, () => {
	if (user.value) {
		// Redirect to protected page
		return navigateTo('/')
	}
}, { immediate: true })
</script>

<template>
	<div>Waiting for login...</div>
</template>
