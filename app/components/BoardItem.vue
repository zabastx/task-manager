<template>
	<ULink
		:to="{ name: 'boards-id', params: { id: item.id } }"
		class="basis-2xs grow-0 shrink-0"
		variant="soft"
	>
		<UCard :ui="{ body: 'sm:p-4', footer: 'sm:p-2' }">
			<h3
				class="whitespace-nowrap overflow-hidden overflow-ellipsis"
			>{{ item.title }}</h3>
			<template #footer>
				<UPopover>
					<UButton
						icon="mdi:menu"
						color="neutral"
						variant="ghost"
					/>
					<template #content>
						<UButton
							label="Удалить"
							@click="onDelete"
						/>
					</template>
				</UPopover>
			</template>
		</UCard>
	</ULink>
</template>

<script lang="ts" setup>
import type { BoardItem } from '~/types/board'

const { item } = defineProps<{
	item: BoardItem
}>()

const emit = defineEmits<{
	deleted: []
}>()

const toast = useToast()

function onDelete() {
	$fetch('/api/boards/' + item.id, { method: 'DELETE' }).then(() => {
		emit('deleted')
	}).catch(() => toast.add({
		title: 'Ошибка',
		description: 'Не удалось удалить доску',
		color: 'error'
	}))
}
</script>
