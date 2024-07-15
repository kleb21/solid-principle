import { Component } from '@angular/core'
import { IClosable } from './interfaces/closable.interface'
import { IOpenable } from './interfaces/openable.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  close(closable: IClosable) {
    closable.close()
  }

  open(openable: IOpenable) {
    openable.open();
  }
}
