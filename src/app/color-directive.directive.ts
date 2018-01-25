import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appColorDirective]'
})
export class ColorDirectiveDirective {
  private miAtributo: String;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log("ColorDirectiveDirective.constructor")
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.changeColor();
  }

  private changeColor(): void {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
  }

  @HostListener('clicked')
  onclick() {
    this.changeColor();
  }
}
