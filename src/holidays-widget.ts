import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import './reusable-components/employee-activity-list.ts'
import type { WidgetSection } from './assets/types.ts'

@customElement('holidays-widget')
export class EmployeeListActivityWidget extends LitElement {
  private sections: WidgetSection[] = [
    {
      items: [
        {
          "name": "Christmas",
          "metadata": "December 25"
        },
        {
          "name": "Wellbeing Day",
          "metadata": "December 29 - optional"
        }
      ]
    }
  ]

  render() {
    return html`
      <employee-activity-list
        headerIcon="🎉"
        headerTitle="Holidays"
        .sections=${this.sections}
      ></employee-activity-list>
    `
  }
}

// At the end of my-element.ts, after the class definition
export { LitElement } from 'lit';

// Also expose it on the global MyElement object
if (typeof globalThis !== 'undefined') {
  (globalThis as any).MyElement = (globalThis as any).MyElement || {};
  (globalThis as any).MyElement.LitElement = LitElement;
}

declare global {
  interface HTMLElementTagNameMap {
    'holidays-widget': EmployeeListActivityWidget
  }
}
