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
			appId: 11111111,
			fields: 'id,name,first_name,last_name,email,gender,picture,cover,link',
			scope: 'public_profile, email',
			tokenClient: '11111111',
			version: 'v3.0',
		},

		google: {
			apiKey: 'AIzaSyDKHO9RHmiMMziRiO6xVFCELQcEDQ5Ub3o',
			clientId: '635556948154-k7fm0pvn6va39tap1ge4iq23ntd4hu37.apps.googleusercontent.com',
		},
	}

};
