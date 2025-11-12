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
  @property()
  sectionsInfo = ""

  /**
   * Optional: Label prefix for metadata (e.g., "Birthday:", "Out until:")
   */
  @property()
  metadataLabel = ''

  sections = []

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
    if(this.sectionsInfo !== "") {
        this.sections = JSON.parse(this.sectionsInfo);
    } else {
        this.sections = [];
    }
    if (this.sections.length === 0) return html``

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
    return html`
      <div class="item">
        <img 
          src=${item.avatar} 
          alt=${item.name}
          class="avatar"
          @error=${this.handleImageError}
        />
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
      display: block;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background-color: #ffffff;
      color: #000000;
    }

    .widget-container {
      padding: 1.5rem;
      max-width: 100%;
    }

    .widget-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1.5rem;
    }

    .header-icon {
      font-size: 1.5rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .header-title {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 700;
      color: #000000;
    }

    .widget-content {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .section-title {
      margin: 0;
      font-size: 1rem;
      font-weight: 600;
      color: #4a4a4a;
    }

    .items-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .item {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
      flex-shrink: 0;
    }

    .item-content {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      flex: 1;
    }

    .item-name {
      font-size: 1rem;
      font-weight: 600;
      color: #000000;
    }

    .item-metadata {
      font-size: 0.875rem;
      color: #4a4a4a;
    }

    .metadata-label {
      font-weight: 500;
    }

    @media (prefers-color-scheme: dark) {
      :host {
        background-color: #1a1a1a;
        color: #ffffff;
      }

      .header-title,
      .item-name {
        color: #ffffff;
      }

      .section-title,
      .item-metadata {
        color: #a0a0a0;
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
