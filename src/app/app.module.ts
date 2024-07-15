import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { AccordionComponent } from './components/accordion.component'
import { BaseAccordionDirective } from './directive/base-accordion.directive'

@NgModule({
  declarations: [AppComponent, AccordionComponent, BaseAccordionDirective],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
