<template>
	<UContainer>
		<pre>
			{{ data }}
		</pre>
	</UContainer>
</template>

<script lang="ts" setup>
const route = useRoute()

const { data, error } = useFetch('/api/boards/' + route.params.id)

watchEffect(() => {
	if (error.value) {
		navigateTo('/')
	}
})
</script>
