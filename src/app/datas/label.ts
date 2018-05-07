import { Label } from '../core/labels';

export const label: Label[] = [{
	id: 1, name: 'Italiano', lang: 'it', labels: {
		app: {
			notFound: 'Pagina inesistente',
			add: 'aggiungi',
			back: 'indietro',
			clear: 'cancella',
			save: 'salva',
			search: 'cerca',
		},
		header: {
			regions: 'Regioni',
			profile: 'Profilo',
		},
		home: {
			headline: 'Sono un titolo tradotto',
			lead: 'Sono la lead dell\'homepage.',
		},
		profile: {
			userName: 'Nome utente',
		},
		regions: {
			headline: 'Regioni',
			addRegion: 'Aggiungi regione',
			regionName: 'Nome regione',
			lastUpdated: 'Ultimo aggiornamento 3 minuti fa',
		},
		regionSearch: {
			regionName: 'Ricerca regione',
		}
	}
}, {
	id: 2, name: 'English', lang: 'en', labels: {
		app: {
			notFound: 'Page not found',
			add: 'add',
			back: 'back',
			clear: 'clear',
			save: 'save',
			search: 'search',
		},
		header: {
			regions: 'Regions',
			profile: 'Profile',
		},
		home: {
			headline: 'I\'m the localized title',
			lead: 'I\'m the lead of the homepage!.',
		},
		profile: {
			userName: 'User Name',
		},
		regions: {
			headline: 'Regions',
			addRegion: 'Add Region',
			regionName: 'Region Name',
			add: 'Add',
			lastUpdated: 'Last updated 3 mins ago',
		},
		regionSearch: {
			regionName: 'Search Region',
			search: 'search',
		}
	}
},];
