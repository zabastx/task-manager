export default defineNuxtPlugin((nuxtApp) => {
	const toast = useToast()

	if (!import.meta.dev) return

	function handleError(error: unknown, context: string) {
		const err = error instanceof Error ? error : new Error(String(error))
		console.error(`[Global Error] [${context}]`, err)
		toast.add({ color: 'error', title: `[Global Error] [${context}]`, description: err.message })
	}

	nuxtApp.vueApp.config.errorHandler = (err, vm, info) => {
		handleError(err, `Vue error (${info})`)
	}

	if (import.meta.client) {
		window.addEventListener('unhandledrejection', (event) => {
			handleError(event.reason, 'unhandledrejection')
		})

		window.addEventListener('error', (event) => {
			handleError(event.error || event.message, 'window.error')
		})
	}

	nuxtApp.hook('app:error', (err) => {
		handleError(err, 'Nuxt app:error')
	})
})
