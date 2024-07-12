import { Component } from '@angular/core'

@Component({
  selector: 'app-accordion-information',
  template: `
    <app-base-accordion [icon]="'🔽'">
      <app-styled-accordion id="panel1">
        <div panel-title>here will be the tiles</div>
        <div panel-content>first idk</div>
      </app-styled-accordion>
      <app-styled-accordion id="panel2">
        <div panel-title>here will be the tiles</div>
        <div panel-content>second idk</div>
      </app-styled-accordion>
      <app-styled-accordion id="panel3">
        <div panel-title>here will be the tiles</div>
        <div panel-content>Content with animations</div>
      </app-styled-accordion>
    </app-base-accordion>
    <router-outlet />
  `,
  styles: ``,
})
export class AccordionInformationComponent {}
