import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import type { ListItem, WidgetSection } from '../assets/types.ts'

/**
 * A reusable list widget component that displays items with avatars, names, and metadata.
 * Can be used for various widgets like "Upcoming Birthdays" or "Who's Out".
 */
@customElement('list-widget')
export class ListWidget extends LitElement {
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

  /**
   * Optional: Label prefix for metadata (e.g., "Birthday:", "Out until:")
   */
  @property()
  metadataLabel = ''

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

  private renderItem(item: ListItem) {
    const hasAvatar = item.avatar && item.avatar.trim() !== ''
    
    return html`
      <div class="item">
        ${hasAvatar 
          ? html`<img 
              src=${item.avatar} 
              alt=${item.name}
              class="avatar"
              @error=${this.handleImageError}
            />`
          : html`<div class="avatar avatar-initials">AB</div>`
        }
        <div class="item-content">
          <div class="item-name">${item.name}</div>
          <div class="item-metadata">
            ${this.metadataLabel ? html`<span class="metadata-label">${this.metadataLabel}</span>` : ''}
            ${item.metadata}
          </div>
        </div>
      </div>
    `
  }

  private handleImageError(e: Event) {
    const img = e.target as HTMLImageElement
    // Fallback to a placeholder or hide the image
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
      background: linear-gradient(135deg, #e8f4f8 0%, #f0e8f5 100%);
      color: #2d2d2d;
      border-radius: 16px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      overflow: hidden;
    }

    .widget-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      min-height: 0;
      max-height: 100%;
      padding: 1.5rem;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 16px;
      backdrop-filter: blur(10px);
      box-sizing: border-box;
    }

    .widget-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid rgba(138, 43, 226, 0.1);
      flex-shrink: 0;
    }

    .header-icon {
      font-size: 1.75rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #8a2be2 0%, #9370db 100%);
      border-radius: 12px;
      padding: 0.5rem;
      box-shadow: 0 2px 8px rgba(138, 43, 226, 0.2);
      flex-shrink: 0;
    }

    .header-title {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 700;
      color: #6a1b9a;
      letter-spacing: -0.02em;
      flex-shrink: 0;
    }

    .widget-content {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      flex: 0 1 auto;
      min-height: 0;
      overflow-y: auto;
      overflow-x: hidden;
      padding-right: 0.5rem;
    }

    /* Custom scrollbar styling */
    .widget-content::-webkit-scrollbar {
      width: 6px;
    }

    .widget-content::-webkit-scrollbar-track {
      background: rgba(138, 43, 226, 0.05);
      border-radius: 10px;
    }

    .widget-content::-webkit-scrollbar-thumb {
      background: rgba(138, 43, 226, 0.3);
      border-radius: 10px;
    }

    .widget-content::-webkit-scrollbar-thumb:hover {
      background: rgba(138, 43, 226, 0.5);
    }

    /* Firefox scrollbar styling */
    .widget-content {
      scrollbar-width: thin;
      scrollbar-color: rgba(138, 43, 226, 0.3) rgba(138, 43, 226, 0.05);
    }

    .section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      flex-shrink: 0;
    }

    .section-title {
      margin: 0;
      font-size: 0.95rem;
      font-weight: 600;
      color: #8a2be2;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 0.5rem 0;
      flex-shrink: 0;
    }

    .items-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.625rem 0;
      transition: opacity 0.2s ease;
      flex-shrink: 0;
    }

    .item:hover {
      opacity: 0.8;
    }

    .avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      object-fit: cover;
      flex-shrink: 0;
      border: 2px solid rgba(138, 43, 226, 0.15);
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

    .item-content {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      flex: 1;
      min-width: 0;
    }

    .item-name {
      font-size: 0.95rem;
      font-weight: 600;
      color: #2d2d2d;
      letter-spacing: -0.01em;
    }

    .item-metadata {
      font-size: 0.8125rem;
      color: #6b7280;
      font-weight: 400;
    }

    .metadata-label {
      font-weight: 500;
      color: #8a2be2;
    }

    @media (prefers-color-scheme: dark) {
      :host {
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        color: #e0e0e0;
      }

      .widget-container {
        background: rgba(30, 30, 46, 0.95);
      }

      .widget-header {
        border-bottom-color: rgba(138, 43, 226, 0.3);
      }

      .header-title {
        color: #b794f6;
      }

      .section-title {
        color: #a78bfa;
      }

      .item:hover {
        opacity: 0.8;
      }

      .item-name {
        color: #e0e0e0;
      }

      .item-metadata {
        color: #9ca3af;
      }

      .metadata-label {
        color: #a78bfa;
      }
    }

    @media (max-width: 768px) {
      .widget-container {
        padding: 1.25rem;
      }

      .header-title {
        font-size: 1.25rem;
      }

      .item {
        padding: 0.5rem 0;
      }

      .avatar {
        width: 40px;
        height: 40px;
      }

      .avatar-initials {
        font-size: 0.8125rem;
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
    'list-widget': ListWidget
  }
}