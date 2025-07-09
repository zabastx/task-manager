export default defineNuxtRouteMiddleware((to) => {
	const excludedRoutes = ['login', 'confirm']
	if (excludedRoutes.includes(to.name as string)) return
	const user = useSupabaseUser()
	if (!user.value) {
		return navigateTo('login')
	}
})
