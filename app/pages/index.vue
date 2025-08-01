<template>
	<UContainer>
		<h2 class="text-2xl mb-2.5">
			Мои доски
		</h2>
		<UContainer class="flex gap-2.5 flex-wrap">
			<BoardItem
				v-for="item in boards"
				:key="item.id"
				:item="item"
				@deleted="refresh"
			/>
			<UPopover
				v-model:open="popoverOpen"
			>
				<UButton
					label="Создать доску"
					color="neutral"
					variant="subtle"
					class="cursor-pointer self-start"
				/>
				<template #content>
					<FormCreateBoard @created="onBoardCreated" />
				</template>
			</UPopover>
		</UContainer>
	</UContainer>
</template>

<script lang="ts" setup>
const { data, refresh } = useFetch('/api/boards')

const boards = computed(() => data.value ?? [])

const popoverOpen = ref(false)

function onBoardCreated() {
	refresh()
	popoverOpen.value = false
}
</script>
