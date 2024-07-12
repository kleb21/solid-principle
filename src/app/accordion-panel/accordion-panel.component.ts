import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { IAccordionService } from '../models/accodion.interface';
import { AccordionService } from '../service/accordion-service.service';

@Component({
  selector: 'app-accordion-panel',
  template: `
    <details [open]="isOpen">
      <summary (click)="toggle.emit()" class="panel-title">
        <ng-content select="[panel-title]"></ng-content>
        <span *ngIf="icon" class="panel-icon">{{ icon }}</span>
      </summary>
      <div class="panel-content">
        <ng-content select="[panel-content]"></ng-content>
      </div>
    </details>
  `,
  styles: [`
    .panel-title {
      display: flex;
      justify-content: start;
      align-items: center;
      cursor: pointer;
    }
    .panel-icon {
      margin-left: 10px;
    }
    .panel-content {
      padding: 10px;
      border-bottom: 1px solid #ddd;
    }
  `]
})
export class AccordionPanelComponent implements OnInit {
  @Input() id!: string;
  @Output() toggle = new EventEmitter<void>();
  public isOpen = false;
  public icon!: string;

  constructor(@Inject(AccordionService) private accordionService: IAccordionService) {}

  ngOnInit(): void {
    this.accordionService.registerPanel(this.id);
  }
}