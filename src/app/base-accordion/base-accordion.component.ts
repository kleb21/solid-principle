import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { AccordionPanelComponent } from '../accordion-panel/accordion-panel.component';

@Component({
  selector: 'app-base-accordion',
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
export class AccordionComponent implements AfterContentInit {
  @ContentChildren(AccordionPanelComponent) panels!: QueryList<AccordionPanelComponent>;

  @Input() icon!: string;

  ngAfterContentInit(): void {
    this.panels.toArray().forEach(panel => {
      panel.icon = this.icon;
      panel.toggle.subscribe(() => {
        this.openPanel(panel);
      });
    });
  }

  openPanel(panel: AccordionPanelComponent): void {
    this.panels.toArray().forEach(p => {
      if (p !== panel) {
        p.isOpen = false;
      }
    });
    panel.isOpen = !panel.isOpen;
  }
}