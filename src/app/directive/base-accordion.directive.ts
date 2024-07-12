import { Directive } from '@angular/core'
import { IClosable } from '../interfaces/closable.interface'
import { IOpenable } from '../interfaces/openable.interface';

@Directive({
  selector: '[appBaseAccordion]',
  exportAs: 'appBaseAccordion',
})
export class BaseAccordionDirective implements IClosable, IOpenable {
  isOpen = true

  close(): void {
    this.isOpen = false;
  }

  open(): void {
    this.isOpen = true;
  }
}
