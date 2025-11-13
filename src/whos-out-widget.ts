import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import './reusable-components/list-widget.ts'
import type { WidgetSection } from './assets/types.ts'

@customElement('whos-out-widget')
export class WhosOutWidget extends LitElement {
  private sections: WidgetSection[] = [
    {
      title: 'This Week',
      items: [
        {
          avatar: 'https://i.pravatar.cc/150?img=5',
          name: 'Alice Johnson',
          firstName: 'Alice',
          lastName: 'Johnson',
          metadata: 'July 3rd'
        },
        {
          avatar: 'https://i.pravatar.cc/150?img=6',
          name: 'Charlie Brown',
          firstName: 'Charlie',
          lastName: 'Brown',
          metadata: 'July 5th'
        },
        {
          avatar: '',
          name: 'Bob Williams',
          firstName: 'Bob',
          lastName: 'Williams',
          metadata: 'July 10th'
        },
        {
          avatar: 'https://i.pravatar.cc/150?img=8',
          name: 'Eve Davis',
          firstName: 'Eve',
          lastName: 'Davis',
          metadata: 'July 12th'
        },
        {
          avatar: '',
          name: 'Frank White',
          firstName: 'Frank',
          lastName: 'White',
          metadata: 'July 14th'
        }
      ]
    }
  ]

  render() {
    return html`
      <list-widget
        headerIcon="👥"
        headerTitle="Who's Out"
        .sections=${this.sections}
        metadataLabel="Out until "
      ></list-widget>
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
    'whos-out-widget': WhosOutWidget
  }
}
