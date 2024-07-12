import { Component } from '@angular/core'
import { IClosable } from './interfaces/closable.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  close(closable: IClosable) {
    closable.close()
  }
}
