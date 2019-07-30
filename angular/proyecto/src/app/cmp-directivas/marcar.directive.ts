import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective {
  
  @Input('appMarcar') colorFondo = 'yellow';
  colorincial = 'white';
  @HostBinding('style.backgroundColor') color;
  @HostListener('mouseover') onMouseOver() {
    this.color = this.colorFondo;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.color = this.colorincial;
  }
  ngOnInit(): void {
    this.colorFondo = this.colorFondo ? this.colorFondo : 'yellow';
  }
}
