// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],

	app: {
		head: {
			title: 'Test',
			meta: [
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ charset: 'utf-8' },
				{ name: 'description', content: '' },
				{ name: 'keywords', content: 'nuxt, vue, javascript' },
			],
		},
	},

	css: ['~/assets/scss/base.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					// Сюда добавляем только файлы с переменными, миксинами и функциями
					additionalData: '@use "~/assets/scss/_variables.scss" as *;',
				},
			},
		},
	},

	modules: ['@nuxtjs/google-fonts'],
	googleFonts: {
		families: {
			Inter: [400, 700],
		},
	},
})
