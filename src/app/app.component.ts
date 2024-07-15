import { Component } from '@angular/core'
import { IClosable } from './interfaces/closable.interface'
import { IOpenable } from './interfaces/openable.interface'
import { BaseAccordionDirective } from './directive/base-accordion.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  close(closable: BaseAccordionDirective) {
    closable.close()
  }

  open(openable: BaseAccordionDirective) {
    openable.open();
  }
}
