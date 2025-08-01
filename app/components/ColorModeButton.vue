<template>
	<ClientOnly v-if="!colorMode?.forced">
		<UButton
			:icon="isDark ? 'mdi:weather-night' : 'mdi:white-balance-sunny'"
			color="neutral"
			variant="ghost"
			class="cursor-pointer"
			@click="isDark = !isDark"
		/>
		<template #fallback>
			<div class="size-8" />
		</template>
	</ClientOnly>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()

const isDark = computed({
	get() {
		return colorMode.value === 'dark'
	},
	set(_isDark) {
		colorMode.preference = _isDark ? 'dark' : 'light'
	}
})
</script>
