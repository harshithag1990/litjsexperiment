import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import './reusable-components/employee-activity-list.ts'
import type { WidgetSection } from './assets/types.ts'

@customElement('celebrations-widget')
export class EmployeeListActivityWidget extends LitElement {
  private sections: WidgetSection[] = [
    {
      items: [
        {
          avatar: 'https://i.pravatar.cc/150?img=10',
          name: 'Karin Petty',
          firstName: 'Karin',
          lastName: 'Petty',
          metadata: 'October 17 - Happy Birthday!',
          icon: '🎂'
        },
        {
          avatar: '',
          name: 'Panda Bear',
          firstName: '',
          lastName: '',
          metadata: 'October 18 - 6th Anniversary',
          icon: '📅'
        },
        {
          avatar: '',
          name: 'John Smith',
          firstName: 'John',
          lastName: 'Smith',
          metadata: 'October 20 - Happy Birthday!',
          icon: '🎂'
        },
        {
          avatar: 'https://i.pravatar.cc/150?img=12',
          name: 'Sarah Johnson',
          firstName: 'Sarah',
          lastName: 'Johnson',
          metadata: 'October 22 - 3rd Anniversary',
          icon: '📅'
        }
      ]
    }
  ]

  render() {
    return html`
      <employee-activity-list
        headerIcon="🎉"
        headerTitle="Celebrations"
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
    'employee-list-activity-widget': EmployeeListActivityWidget
  }
}
