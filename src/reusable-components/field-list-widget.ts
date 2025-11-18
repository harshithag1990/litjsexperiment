import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

export interface FieldItem {
  label: string
  title: string
  icon?: string
  iconUrl?: string
  highlight?: boolean
}

/**
 * A reusable field list widget component that displays fields with labels, values, and icons.
 * Supports emoji icons (priority) or icon URLs as fallback.
 */
@customElement('field-list-widget')
export class FieldListWidget extends LitElement {
  /**
   * Array of field items to display
   */
  @property({ type: Array })
  fields: FieldItem[] = []

  /**
   * Number of columns (default: 2)
   */
  @property({ type: Number })
  columns = 2

  render() {
    if (!this.fields || this.fields.length === 0) return html``

    return html`
      <div class="field-list-container">
        ${this.fields.map(field => this.renderField(field))}
      </div>
    `
  }

  private renderField(field: FieldItem) {
    const iconContent = this.getIconContent(field)

    return html`
      <div class="field-item">
        <div class="field-icon">${iconContent}</div>
        <div class="field-content">
          <div class="field-label">${field.label}</div>
          <div class="field-title ${field.highlight ? 'highlighted' : ''}">
            ${field.title}
          </div>
        </div>
      </div>
    `
  }

  private getIconContent(field: FieldItem) {
    // Priority: emoji icon over iconUrl
    if (field.icon) {
      return html`<span class="icon-emoji">${field.icon}</span>`
    }
    if (field.iconUrl) {
      return html`<img src="${field.iconUrl}" alt="${field.label}" class="icon-image" />`
    }
    return html``
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .field-list-container {
      display: grid;
      grid-template-columns: repeat(var(--field-columns, 2), 1fr);
      gap: 24px;
    }

    .field-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }

    .field-icon {
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 2px;
    }

    .icon-emoji {
      font-size: 16px;
      line-height: 1;
      color: #8a2be2;
    }

    .icon-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .field-content {
      display: flex;
      flex-direction: column;
      gap: 4px;
      flex: 1;
      min-width: 0;
    }

    .field-label {
      font-size: 11px;
      font-weight: 500;
      color: #9ca3af;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      line-height: 1.4;
    }

    .field-title {
      font-size: 14px;
      font-weight: 400;
      color: #111827;
      word-break: break-word;
      line-height: 1.5;
    }

    .field-title.highlighted {
      color: #8a2be2;
      font-weight: 500;
    }

    @media (max-width: 768px) {
      .field-list-container {
        grid-template-columns: 1fr;
        gap: 16px;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'field-list-widget': FieldListWidget
  }
}
