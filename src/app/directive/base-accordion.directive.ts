import { Directive } from '@angular/core'
import { IClosable } from '../interfaces/closable.interface'

@Directive({
  selector: '[appBaseAccordion]',
  exportAs: 'appBaseAccordion',
})
export class BaseAccordionDirective implements IClosable {
  isOpen = true

  close(): void {
    this.isOpen = false
  }
}
