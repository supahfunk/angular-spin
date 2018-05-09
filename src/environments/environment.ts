// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	assets: '/assets',
	enableTracing: false,
	production: false,
	public: '/',
	useHash: false,
	useLang: true,
	useMarket: false,
	defaultLanguage: 'it',
	languages: [
		{ id: 1, name: 'Italiano', lang: 'it' },
		{ id: 2, name: 'English', lang: 'en' },
	],
};
