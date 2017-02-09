import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appMyAppDirective]'
})
export class AppDirective {

    public constructor(private el: ElementRef) {
        el.nativeElement.style.color = 'red';
    }
}
