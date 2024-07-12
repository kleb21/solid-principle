export interface IAccordionService {
  registerPanel(id: string): void
  togglePanel(id: string): void
  isPanelOpen(id: string): boolean
}
