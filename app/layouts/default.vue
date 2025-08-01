<template>
	<div class="flex flex-col h-full">
		<AppHeader />
		<UContainer
			class="grow overflow-auto py-2.5"
			as="main"
		>
			<slot />
		</UContainer>
		<AppFooter />
	</div>
</template>

<script lang="ts" setup>
</script>
