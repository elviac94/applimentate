import { Directive, HostListener } from '@angular/core';
import { KeydownEventInterface, PasteEventInterface } from './to-positive-number.interface';

@Directive({
  selector: '[appToPositiveNumber]'
})

export class ToPositiveNumberDirective {

  @HostListener( 'keydown', [ '$event' ] )
  private keyPositive( ev: KeydownEventInterface ): void {
    if (!this.isValidKey(ev.key)) {
      ev.preventDefault();
    }
  }

  @HostListener( 'paste', [ '$event' ] )
  private pastePositive( ev: PasteEventInterface ): void {
    if (!this.isValidKey(ev.clipboardData.getData('text'))) {
      ev.preventDefault();
    }
  }

  private isValidKey( key: string ): boolean {
    return key.includes('Arrow') || key === 'Backspace' || key === 'Delete' || !isNaN(parseInt(key, 10));
  }
}
