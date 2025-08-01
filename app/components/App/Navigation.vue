<template>
	<UNavigationMenu
		:items="items"
		class="justify-center"
	/>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
	{
		label: 'Доски',
		icon: 'mdi:clipboard-multiple',
		to: '/'
	},
])
</script>
