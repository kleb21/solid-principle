import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AccordionComponent } from './base-accordion/base-accordion.component'
import { AccordionPanelComponent } from './accordion-panel/accordion-panel.component'
import { StyledAccordionComponent } from './styled-accordion/styled-accordion.component'
import { AccordionInformationComponent } from './accordion-information/accordion-information.component'
import { BaseAccordionComponent } from './components/base-accordion/base-accordion.component'

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AccordionPanelComponent,
    StyledAccordionComponent,
    AccordionInformationComponent,
    BaseAccordionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
