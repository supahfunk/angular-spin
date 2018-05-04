import { Page } from '../core/pages/page';

export const page: Page[] = [
	{ id: 1, name: 'Homepage', title: 'Homepage', description: '', slug: '/', component: 'HomeComponent' },
	{ id: 2, name: 'Regions', title: 'Regions', description: '', slug: '/regions', component: 'RegionsComponent' },
	{ id: 3, name: 'Profile', title: 'Profile', description: '', slug: '/profile', component: 'ProfileComponent' },
	{ id: 4, name: 'Region Detail', title: 'Region Detail', description: '', slug: '/region/', component: 'RegionDetailComponent' },
];
