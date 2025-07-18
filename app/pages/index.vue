<template>
	<div class="main">
		<h1>Index</h1>
		<pre>{{ boards }}</pre>
		<button
			type="button"
			@click="test"
		>
			test
		</button>
	</div>
</template>

<script lang="ts" setup>
const { data, refresh } = useFetch('/api/boards')

const boards = computed(() => data)

const toast = useToast()

function test() {
	$fetch(`/api/boards/4093eb17-aba2-4b7d-a1ab-e0adf0372870`, { method: 'DELETE' })
		.then(() => refresh)
		.catch(() => toast.add({ color: 'error' }))
}
</script>
