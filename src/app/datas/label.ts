import { Label } from '../core/labels';

export const label: Label[] = [{
	id: 1, name: 'Italiano', lang: 'it', labels: {
		home: {
			headline: 'Sono un titolo tradotto',
			lead: 'Sono la lead dell\'homepage.',
		},
		regions: {
			headline: 'Regioni',
		}
	}
}, {
	id: 2, name: 'English', lang: 'en', labels: {
		home: {
			headline: 'I\'m the localized title',
			lead: 'I\'m the lead of the homepage!.',
		},
		regions: {
			headline: 'Regions',
		}
	}
},];
