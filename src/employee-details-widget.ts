import { html, LitElement, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import './reusable-components/field-list-widget.ts'
import type { FieldItem } from './reusable-components/field-list-widget.ts'

@customElement('employee-details-widget')
export class EmployeeDetailsWidget extends LitElement {
  @property({ type: Boolean })
  collapsed = false

  @property({ type: Object })
  employeeData: {
    manager?: string
    location?: string
    workPhone?: string
    jobTitle?: string
    workSchedule?: string
    department?: string
    email?: string
    mobilePhone?: string
    employmentType?: string
    nickname?: string
  } = {
    manager: 'Maria Thompson',
    location: 'Dallas Distribution Center, Building C',
    workPhone: '+1 (214) 555-0182',
    jobTitle: 'Forklift Operator',
    workSchedule: 'Mon-Fri, 6:00 AM – 2:30 PM',
    department: 'Warehouse Operations',
    email: 'james.davis@nova.com',
    mobilePhone: '+1 (214) 555-0198',
    employmentType: 'Full-time',
    nickname: 'JD'
  }

  private fields: FieldItem[] = []

  connectedCallback() {
    super.connectedCallback()
    this.updateFields()
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties)
    if (changedProperties.has('employeeData')) {
      this.updateFields()
    }
  }

  private updateFields() {
    this.fields = [
      {
        label: 'Manager',
        title: this.employeeData.manager || '',
        // icon: '💼',
        iconUrl: 'https://img.icons8.com/?size=100&id=11224&format=png&color=7950F2',
        highlight: true
      },
      {
        label: 'Location',
        title: this.employeeData.location || '',
        icon: '📍'
      },
      {
        label: 'Work phone',
        title: this.employeeData.workPhone || '',
        icon: '📞'
      },
      {
        label: 'Job Title',
        title: this.employeeData.jobTitle || '',
        icon: '💼'
      },
      {
        label: 'Work Schedule',
        title: this.employeeData.workSchedule || '',
        icon: '📍'
      },
      {
        label: 'Department',
        title: this.employeeData.department || '',
        icon: '💼'
      },
      {
        label: 'Email',
        title: this.employeeData.email || '',
        icon: '✉️',
        highlight: true
      },
      {
        label: 'Mobile phone',
        title: this.employeeData.mobilePhone || '',
        icon: '📞'
      },
      {
        label: 'Employment Type',
        title: this.employeeData.employmentType || '',
        icon: '💼'
      },
      {
        label: 'Nickname',
        title: this.employeeData.nickname || '',
        icon: '🏷️'
      }
    ]
  }

  private toggleCollapse() {
    this.collapsed = !this.collapsed
  }

  render() {
    return html`
      <div class="widget-container">
        <div class="widget-header" @click=${this.toggleCollapse}>
          <h2 class="header-title">Employee details</h2>
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
        ${!this.collapsed ? html`
          <div class="widget-content">
            <field-list-widget .fields=${this.fields}></field-list-widget>
          </div>
        ` : ''}
      </div>
    `
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
      border: 1px solid #e5e7eb;
      overflow: hidden;
    }

    .widget-container {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .widget-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 20px;
      cursor: pointer;
      user-select: none;
      border-bottom: 1px solid #e5e7eb;
      transition: background-color 0.2s ease;
    }

    .widget-header:hover {
      background-color: #f9fafb;
    }

    .header-title {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      color: #111827;
      letter-spacing: -0.01em;
    }

    .chevron-icon {
      width: 20px;
      height: 20px;
      color: #6b7280;
      transition: transform 0.2s ease;
      flex-shrink: 0;
    }

    .chevron-icon.collapsed {
      transform: rotate(180deg);
    }

    .widget-content {
      padding: 20px;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'employee-details-widget': EmployeeDetailsWidget
  }
}