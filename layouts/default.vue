<template>
	<div class="flex flex-col h-full">
		<AppHeader />
		<main class="grow">
			<slot />
		</main>
		<AppFooter />
	</div>
</template>

<script lang="ts" setup>
</script>
