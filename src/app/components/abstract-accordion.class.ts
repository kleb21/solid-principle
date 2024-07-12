import { IClosable } from '../interfaces/closable.interface'

export abstract class AbstractAccordion implements IClosable {
  close(): void {
    console.log('close all')
  }
}
