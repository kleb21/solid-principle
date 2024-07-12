import { Component } from '@angular/core'
import { BaseAccordionDirective } from '../../directive/base-accordion.directive'

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent extends BaseAccordionDirective {}
