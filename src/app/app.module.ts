import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { AccordionComponent } from './components/accordion/accordion.component'
import { BaseAccordionDirective } from './directive/base-accordion.directive'

@NgModule({
  declarations: [AppComponent, AccordionComponent, BaseAccordionDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
