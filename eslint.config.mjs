// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
	rules: {
		'@typescript-eslint/no-explicit-any': 'off',
		'@stylistic/comma-dangle': 'off',
		'@stylistic/indent': ['error', 'tab'],
		'@stylistic/indent-binary-ops': ['error', 'tab'],
		'@stylistic/no-tabs': 'off',
		'@stylistic/no-trailing-spaces': 'off',
		'vue/multi-word-component-names': 'off'
	},
}).append({
	ignores: ['./server/types/database.ts']
})
