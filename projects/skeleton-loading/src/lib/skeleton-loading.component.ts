import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'fis-skeleton-loading',
    templateUrl: './skeleton-loading.component.html',
    styleUrls: ['./skeleton-loading.component.scss']
})
export class FisSkeletonLoadingComponent implements OnInit {
    @Input() classes: string = '';
    @Input() parentClasses: string = '';
    @Input() animationClass: string = '';
    @Input() width: string = '100%';
    @Input() height: string = '100%';
    @Input() showContent = false;
    @Input() repeatElements = 1;

    constructor() {}

    ngOnInit() {}

    styles() {
        return {
            width: this.width,
            height: this.height,
        };
    }

    get classesList() {
        return (this.showContent) ? '' : [this.classes, `animation-${this.animationClass}`];
    }

    get arrayFromRepeat() {
        return Array(this.repeatElements).map((x, i) => i);
    }

    get parentClassesList() {
        return (this.showContent) ? '' : this.parentClasses;
    }
}
