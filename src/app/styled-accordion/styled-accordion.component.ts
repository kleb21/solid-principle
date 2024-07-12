import { Component, EventEmitter, Inject, Input, Output } from '@angular/core'
import { AccordionPanelComponent } from '../accordion-panel/accordion-panel.component'
import { trigger, state, style, transition, animate } from '@angular/animations'
import { IAccordionService } from '../models/accodion.interface'
import { AccordionService } from '../service/accordion-service.service'

@Component({
  selector: 'app-styled-accordion',
  template: `
    <details [open]="isOpen">
      <summary (click)="onToggle()" class="panel-title">
        <ng-content select="[panel-title]"></ng-content>
        <span *ngIf="icon" class="panel-icon">{{ icon }}</span>
      </summary>
      <div class="panel-content" [@openClose]="isOpen ? 'open' : 'closed'">
        <ng-content select="[panel-content]"></ng-content>
      </div>
    </details>
  `,
  styles: [
    `
      details {
        border: 1px solid #ccc;
        margin-bottom: 10px;
        border-radius: 4px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
      summary {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        padding: 10px;
        background-color: #f9f9f9;
        border-bottom: 1px solid #ddd;
        font-weight: bold;
      }
      .panel-icon {
        margin-left: 10px;
      }
      .panel-content {
        overflow: hidden;
        padding: 10px;
        background-color: white;
      }
    `,
  ],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '*',
          opacity: 1,
          padding: '10px',
        }),
      ),
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0,
          padding: '0 10px',
        }),
      ),
      transition('open => closed', [animate('0.3s ease-in-out')]),
      transition('closed => open', [animate('0.3s ease-in-out')]),
    ]),
  ],
})
export class StyledAccordionComponent extends AccordionPanelComponent {
  @Input() declare id: string
  @Output() override toggle = new EventEmitter<void>()
  declare icon: string

  constructor(@Inject(AccordionService) accordionService: IAccordionService) {
    super(accordionService)
  }

  override ngOnInit(): void {
    super.ngOnInit()
  }

  override onToggle(): void {
    super.onToggle()
  }
}
