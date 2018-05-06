import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHosterComponent, PageResolverService } from './pages';

const routes: Routes = [
    { path: '**', component: PageHosterComponent, resolve: { pageResolver: PageResolverService } },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        PageResolverService
    ]
})
export class CoreRouting { }
