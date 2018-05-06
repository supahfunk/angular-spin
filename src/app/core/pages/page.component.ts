
import { Component, HostBinding, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { Page } from './page';
import { PageResolver } from './page-resolver';

@Component({
    selector: 'app-page',
    template: `<h1>I'm a default view!</h1>`,
})

export class PageComponent implements OnDestroy {
    @Input() page: Page;
    @HostBinding('attr.class') attrClass = 'page';

    protected unsubscribe: any = new Subject();

    constructor(
        protected route: ActivatedRoute
    ) {
        this.getPage();
        // this.titleService.setTitle();
    }

    getPage(): void {
        if (this.route) {
            this.route.data
                .takeUntil(this.unsubscribe) // before any subscribe
                .subscribe((data: { pageResolver: PageResolver }) => {
                    this.page = (data.pageResolver ? data.pageResolver.page : null);
                });
        }
    }

    getId(): number {
        return +this.route.snapshot.paramMap.get('id') || (this.page ? this.page.id : 0);
    }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
