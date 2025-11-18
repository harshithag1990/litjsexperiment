import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import type { ListItem, WidgetSection } from '../assets/types.ts'

/**
 * A reusable list widget component with green theme and icons support.
 * Designed for celebrations and activity widgets.
 */
@customElement('employee-activity-list')
export class ListWidget2 extends LitElement {
  /**
   * The header icon (can be emoji, SVG, or text)
   */
  @property()
  headerIcon = ''

  /**
   * The header title
   */
  @property()
  headerTitle = ''

  /**
   * The sections data (array of sections with optional titles and items)
   */
  @property({ type: Array })
  sections: WidgetSection[] = []

  render() {
    return html`
      <div class="widget-container">
        ${this.renderHeader()}
        ${this.renderSections()}
      </div>
    `
  }

  private renderHeader() {
    if (!this.headerTitle) return html``

    return html`
      <div class="widget-header">
        ${this.headerIcon ? html`<span class="header-icon">${this.headerIcon}</span>` : ''}
        <h2 class="header-title">${this.headerTitle}</h2>
      </div>
    `
  }

  private renderSections() {
    if (!this.sections || this.sections.length === 0) return html``

    return html`
      <div class="widget-content">
        ${this.sections.map(section => this.renderSection(section))}
      </div>
    `
  }

  private renderSection(section: WidgetSection) {
    return html`
      <div class="section">
        ${section.title ? html`<h3 class="section-title">${section.title}</h3>` : ''}
        <div class="items-list">
          ${section.items.map(item => this.renderItem(item))}
        </div>
      </div>
    `
  }

  private getInitials(item: ListItem): string | null {
    const firstInitial = item.firstName && item.firstName.trim() 
      ? item.firstName.trim().charAt(0).toUpperCase() 
      : ''
    const lastInitial = item.lastName && item.lastName.trim() 
      ? item.lastName.trim().charAt(0).toUpperCase() 
      : ''
    const initials = `${firstInitial}${lastInitial}`
    return initials || null
  }

  private renderItem(item: ListItem) {
    const avatarExists = 'avatar' in item && item.avatar !== undefined && item.avatar !== null
    const hasAvatarUrl = avatarExists && item.avatar && item.avatar.trim() !== ''
    const initials = this.getInitials(item)
    
    return html`
      <div class="item">
        ${hasAvatarUrl 
          ? html`<img 
              src=${item.avatar} 
              alt=${item.name}
              class="avatar"
              @error=${this.handleImageError}
            />`
          : !avatarExists && this.headerIcon
            ? html`<div class="avatar avatar-icon">${this.headerIcon}</div>`
            : initials
              ? html`<div class="avatar avatar-initials">${initials}</div>`
              : html`<div class="avatar avatar-default">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor"/>
                    <path d="M12 14C7.58172 14 4 16.6863 4 20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20C20 16.6863 16.4183 14 12 14Z" fill="currentColor"/>
                  </svg>
                </div>`
        }
        <div class="item-content">
          <div class="item-name">${item.name}</div>
          <div class="item-metadata">
            ${item.metadata}
          </div>
        </div>
        ${item.icon ? html`<div class="item-icon">${item.icon}</div>` : ''}
      </div>
    `
  }

  private handleImageError(e: Event) {
    const img = e.target as HTMLImageElement
    // Fallback to initials or default avatar
    img.style.display = 'none'
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      max-height: 100%;
      min-width: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background: #ffffff;
      color: #1f2937;
      border-radius: 12px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
      overflow: hidden;
    }

    .widget-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      min-height: 0;
      max-height: 100%;
      padding: 1.25rem;
      background: #ffffff;
      border-radius: 12px;
      box-sizing: border-box;
    }

    .widget-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1.25rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      flex-shrink: 0;
    }

    .header-icon {
      font-size: 1.5rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .header-title {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 600;
      color: #6a1b9a;
      letter-spacing: -0.01em;
      flex-shrink: 0;
    }

    .widget-content {
      display: flex;
      flex-direction: column;
      gap: 0;
      flex: 0 1 auto;
      min-height: 0;
      overflow-y: auto;
      overflow-x: hidden;
    }

    /* Custom scrollbar styling */
    .widget-content::-webkit-scrollbar {
      width: 6px;
    }

    .widget-content::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.05);
      border-radius: 10px;
    }

    .widget-content::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 10px;
    }

    .widget-content::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.3);
    }

    /* Firefox scrollbar styling */
    .widget-content {
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.05);
    }

    .section {
      display: flex;
      flex-direction: column;
      gap: 0;
      flex-shrink: 0;
    }

    .section-title {
      margin: 0;
      font-size: 0.875rem;
      font-weight: 600;
      color: #6b7280;
      text-transform: none;
      letter-spacing: 0;
      padding: 0 0 0.75rem 0;
      flex-shrink: 0;
    }

    .items-list {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .items-list .item:last-child {
      border-bottom: none;
    }

    .item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.875rem 0;
      transition: background-color 0.15s ease;
      flex-shrink: 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    }

    .item:hover {
      background-color: rgba(0, 0, 0, 0.02);
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      flex-shrink: 0;
      border: none;
    }

    .avatar-initials {
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #8a2be2 0%, #9370db 100%);
      color: white;
      font-weight: 600;
      font-size: 0.875rem;
      letter-spacing: 0.02em;
      object-fit: none;
    }

    .avatar-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #8a2be2 0%, #9370db 100%);
      color: white;
      font-size: 1.25rem;
      object-fit: none;
    }

    .avatar-default {
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #8a2be2 0%, #9370db 100%);
      color: white;
      object-fit: none;
    }

    .avatar-default svg {
      width: 20px;
      height: 20px;
    }

    .item-content {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      flex: 1;
      min-width: 0;
    }

    .item-name {
      font-size: 0.9375rem;
      font-weight: 600;
      color: #1f2937;
      letter-spacing: -0.01em;
    }

    .item-metadata {
      font-size: 0.8125rem;
      color: #6b7280;
      font-weight: 400;
      line-height: 1.4;
    }

    .item-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.125rem;
      flex-shrink: 0;
      width: 20px;
      height: 20px;
      color: #8a2be2;
    }

    .item-icon svg {
      width: 100%;
      height: 100%;
    }

    .item-icon svg path,
    .item-icon svg circle,
    .item-icon svg rect,
    .item-icon svg polygon,
    .item-icon svg line {
      fill: #8a2be2;
      stroke: #8a2be2;
    }

    @media (prefers-color-scheme: dark) {
      :host {
        background: #1f2937;
        color: #e0e0e0;
      }

      .widget-container {
        background: #1f2937;
      }

      .widget-header {
        border-bottom-color: rgba(255, 255, 255, 0.1);
      }

      .header-title {
        color: #b794f6;
      }

      .section-title {
        color: #9ca3af;
      }

      .item {
        border-bottom-color: rgba(255, 255, 255, 0.1);
      }

      .item:hover {
        background-color: rgba(255, 255, 255, 0.05);
      }

      .item-name {
        color: #e0e0e0;
      }

      .item-metadata {
        color: #9ca3af;
      }
    }

    @media (max-width: 768px) {
      .widget-container {
        padding: 1rem;
      }

      .header-title {
        font-size: 1.125rem;
      }

      .item {
        padding: 0.75rem 0;
      }

      .avatar {
        width: 36px;
        height: 36px;
      }

      .avatar-initials {
        font-size: 0.8125rem;
      }

      .avatar-default svg {
        width: 18px;
        height: 18px;
      }
    }
  `
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
    'list-widget2': ListWidget2
  }
}
