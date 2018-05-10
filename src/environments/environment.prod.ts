export const environment = {
	assets: '/assets',
	enableTracing: false,
	production: true,
	public: '/',
	useHash: false,
	useLang: true,
	useMarket: false,
	urlStrategy: '/:lang/', // '/:lang/:market/',
	defaultLanguage: 'it',
	defaultMarket: 'it',
	languages: [
		{ id: 1, name: 'Italiano', lang: 'it' },
		{ id: 2, name: 'English', lang: 'en' },
	],
	plugins: {
		facebook: {
			appId: 340008479796111,
			fields: 'id,name,first_name,last_name,email,gender,picture,cover,link',
			scope: 'public_profile, email',
			version: 'v2.10',
		},
	}

};
