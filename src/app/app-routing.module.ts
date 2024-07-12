import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AccordionInformationComponent } from './accordion-information/accordion-information.component'

const routes: Routes = [{ path: '', component: AccordionInformationComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
