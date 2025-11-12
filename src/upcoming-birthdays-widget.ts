import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import './reusable-components/list-widget.ts'
import type { WidgetSection } from './assets/types.ts'

@customElement('upcoming-birthdays-widget')
export class UpcomingBirthdaysWidget extends LitElement {
  private sections: WidgetSection[] = [
    {
      "title": "This Month (July)",
      "items": [
        {
          "avatar": "https://i.pravatar.cc/150?img=1",
          "name": "Diana Smith",
          "metadata": "July 5th"
        },
        {
          "avatar": "https://i.pravatar.cc/150?img=2",
          "name": "Ethan Hunt",
          "metadata": "July 8th"
        }
      ]
    },
    {
      "title": "Next Month (August)",
      "items": [
        {
          "avatar": "https://i.pravatar.cc/150?img=3",
          "name": "Fiona Green",
          "metadata": "August 1st"
        },
        {
          "avatar": "https://i.pravatar.cc/150?img=4",
          "name": "Gary Oldman",
          "metadata": "August 10th"
        }
      ]
    }
  ]

  render() {
    return html`
      <list-widget
        headerIcon="🎁"
        headerTitle="Upcoming Birthdays"
        .sections=${this.sections}
        metadataLabel="Birthday: "
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
    'upcoming-birthdays-widget': UpcomingBirthdaysWidget
  }
}
