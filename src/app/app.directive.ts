import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[myAppDirective]'
})
export class AppDirective {

    public constructor(private el: ElementRef) {
        el.nativeElement.style.color = 'red';
    }
}
