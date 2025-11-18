import { html, LitElement, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import './reusable-components/field-list-widget.ts'
import type { FieldItem } from './assets/types.ts'

@customElement('employee-details-widget')
export class EmployeeDetailsWidget extends LitElement {

  @property({ type: Boolean }) collapsed = false

  private fields: FieldItem[] = [
    {
      label: 'Manager',
      title: 'Maria Thompson',
      iconUrl: 'https://img.icons8.com/?size=100&id=11224&format=png&color=7950F2',
      highlight: true
    },
    { label: 'Location', title: 'Dallas Distribution Center, Building C', icon: '📍' },
    { label: 'Work phone', title: '+1 (214) 555-0182', icon: '📞' },
    { label: 'Job Title', title: 'Forklift Operator', icon: '💼' },
    { label: 'Work Schedule', title: 'Mon-Fri, 6:00 AM – 2:30 PM', icon: '📍' },
    { label: 'Department', title: 'Warehouse Operations', icon: '💼' },
    { label: 'Email', title: 'james.davis@nova.com', icon: '✉️', highlight: true },
    { label: 'Mobile phone', title: '+1 (214) 555-0198', icon: '📞' },
    { label: 'Employment Type', title: 'Full-time', icon: '💼' },
    { label: 'Nickname', title: 'JD', icon: '🏷️' }
  ]

  private toggleCollapse() {
    this.collapsed = !this.collapsed
  }

  render() {
    return html`
      <div class="widget-container">

        <!-- Header -->
        <div class="widget-header" @click=${this.toggleCollapse}>
          <span class="header-left">
            <span class="header-icon">👤</span>
            <span class="header-title">Employee details</span>
          </span>

          <svg 
            class="chevron-icon ${this.collapsed ? 'collapsed' : ''}" 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none"
          >
            <path 
              d="M5 12.5L10 7.5L15 12.5" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <!-- Collapsible Content -->
        <div class="widget-content ${this.collapsed ? 'collapsed' : ''}">
          <field-list-widget .fields=${this.fields}></field-list-widget>
        </div>

      </div>
    `
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      font-family: 'Inter', sans-serif;
    }

    /* Card */
    .widget-container {
      background: #ffffff;
      border-radius: 12px;
      border: 1px solid #e5e7eb;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1),
                  0 1px 2px rgba(0, 0, 0, 0.06);
      overflow: hidden;
      width: 100%;
    }

    /* Header */
    .widget-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 20px;
      cursor: pointer;
      user-select: none;
      border-bottom: 1px solid #e5e7eb;
      background: #f9fafb;
      transition: background-color 0.2s ease;
    }

    .widget-header:hover {
      background-color: #f3f4f6;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .header-icon {
      font-size: 18px;
    }

    .header-title {
      font-size: 16px;
      font-weight: 600;
      color: #111827;
    }

    /* Chevron */
    .chevron-icon {
      width: 20px;
      height: 20px;
      color: #6b7280;
      transition: transform 0.25s ease;
    }
    .chevron-icon.collapsed {
      transform: rotate(180deg);
    }

    /* Collapse animation */
    .widget-content {
      padding: 20px;
      overflow: hidden;
      max-height: 1000px;
      transition: max-height 0.35s ease, padding 0.35s ease;
    }

    .widget-content.collapsed {
      max-height: 0;
      padding-top: 0;
      padding-bottom: 0;
    }
  `
}

// export pattern
export { LitElement } from 'lit'

if (typeof globalThis !== 'undefined') {
  (globalThis as any).MyElement = (globalThis as any).MyElement || {}
  ;(globalThis as any).MyElement.LitElement = LitElement
}

declare global {
  interface HTMLElementTagNameMap {
    'employee-details-widget': EmployeeDetailsWidget
  }
}
