import { Injectable } from '@angular/core'
import { IAccordionService } from '../models/accodion.interface'

@Injectable({
  providedIn: 'root',
})
export class AccordionService implements IAccordionService {
  private panels: { [key: string]: boolean } = {}

  registerPanel(id: string): void {
    if (!this.panels[id]) {
      this.panels[id] = false
    }
  }

  togglePanel(id: string): void {
    if (this.panels[id] !== undefined) {
      this.panels[id] = !this.panels[id]
    }
  }

  isPanelOpen(id: string): boolean {
    return this.panels[id]
  }
}
