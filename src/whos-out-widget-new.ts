import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import type { WidgetSection } from './assets/types.ts'

// IMPORT THE REUSABLE COMPONENT
import './reusable-components/user-avatar.ts' 

@customElement('whos-out-widget-new')
export class WhosOutWidgetNew extends LitElement {
  
  @property({ type: String }) 
  headerTitle = "Who's Out";

  // PRESERVED DATA
  @property({ type: Array }) 
  sections: WidgetSection[] = [
    {
      title: 'Today',
      items: [
        { avatar: 'https://i.pravatar.cc/150?img=5', name: 'Alice Johnson', firstName: 'Alice', lastName: 'Johnson', metadata: 'July 3rd' },
        { avatar: 'https://i.pravatar.cc/150?img=6', name: 'Charlie Brown', firstName: 'Charlie', lastName: 'Brown', metadata: 'July 5th' },
        // Long name example to test initials logic
        { avatar: '', name: 'Bob Williams', firstName: 'Bob', lastName: 'Williams', metadata: 'July 10th' }, 
        { avatar: 'https://i.pravatar.cc/150?img=8', name: 'Eve Davis', firstName: 'Eve', lastName: 'Davis', metadata: 'July 12th' }
      ]
    },
    {
      title: "Tomorrow",
      items: [
        { avatar: 'https://i.pravatar.cc/150?img=5', name: 'Alice Johnson', firstName: 'Alice', lastName: 'Johnson', metadata: 'July 3rd' }
      ]
    }
  ];

  @property({ type: String }) 
  headerIcon = ""; 

  static styles = css`
    :host {
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      
      /* THEME VARIABLES - WHITE & PURPLE THEME */
      --bg-card: #ffffff;          /* Pure White Background */
      --text-primary: #1f2937;     /* Dark Grey/Black for readability */
      --text-secondary: #7c3aed;   /* Vivid Purple for Titles */
      --text-muted: #6b7280;       /* Soft Grey for counts */
      --border-color: #e5e7eb;     /* Light Grey Border */
      --header-icon-bg: #8b5cf6;   /* Purple Background for Icon Box */
      --header-icon-fg: #ffffff;   /* White Icon */
    }

    .widget-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 16px; 
      padding: 20px;
      /* Clean, soft shadow for white theme */
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      color: var(--text-primary);
    }

    .header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 24px;
      color: var(--text-secondary);
      font-weight: 800; /* Slightly bolder for emphasis on white */
      font-size: 18px;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 16px;
    }

    /* Styling the default icon to look like the purple box */
    .header svg {
      width: 24px;
      height: 24px;
      fill: var(--header-icon-fg);
      background: var(--header-icon-bg);
      padding: 8px;
      border-radius: 12px;
      /* Subtle shadow on the icon box to make it pop */
      box-shadow: 0 2px 5px rgba(139, 92, 246, 0.4);
    }

    /* If a custom text icon is passed */
    .header-icon-text {
      font-size: 20px;
      line-height: 1;
      background: var(--header-icon-bg);
      color: var(--header-icon-fg);
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      box-shadow: 0 2px 5px rgba(139, 92, 246, 0.4);
    }

    .section {
      margin-bottom: 24px;
    }

    .section-title {
      font-size: 12px;
      font-weight: 700;
      color: var(--text-secondary);
      margin-bottom: 16px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .count {
      color: var(--text-muted);
      font-weight: 500;
      font-size: 11px;
    }

    .avatar-list {
      display: flex;
      flex-wrap: wrap;
      gap: 16px; 
      align-items: flex-start; 
    }

    /* Container for Avatar + Name */
    .person-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 80px; 
      text-align: center;
    }

    /* Name Styling */
    .person-name {
      font-size: 12px;
      color: var(--text-primary); /* Dark Grey */
      margin-top: 8px;
      width: 100%;
      font-weight: 600; /* Slightly bolder for dark text on white */
      
      /* Allow wrapping */
      white-space: normal; 
      overflow-wrap: break-word; 
      word-wrap: break-word;
      line-height: 1.3;
      
      /* Limit to 2 lines */
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `;

  private renderDefaultIcon() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    `;
  }

  render() {
    return html`
      <div class="widget-card">
        
        <div class="header">
          ${this.headerIcon 
             ? html`<span class="header-icon-text">${this.headerIcon}</span>` 
             : this.renderDefaultIcon()}
          <span>${this.headerTitle}</span>
        </div>

        ${this.sections.map(section => html`
          <div class="section">
            <div class="section-title">
              ${section.title} <span class="count">(${section.items.length})</span>
            </div>
            <div class="avatar-list">
              
              ${section.items.map(item => html`
                <div class="person-item">
                  
                  <user-avatar
                    .image="${item.avatar}"
                    .name="${item.name}"
                    .firstName="${item.firstName}"
                    .lastName="${item.lastName}"
                  ></user-avatar>

                  <span class="person-name" title="${item.name}">
                    ${item.name} 
                  </span>
                  
                </div>
              `)}

            </div>
          </div>
        `)}

      </div>
    `;
  }
}

export { LitElement };
if (typeof globalThis !== 'undefined') {
  (globalThis as any).MyElement = (globalThis as any).MyElement || {};
  (globalThis as any).MyElement.LitElement = LitElement;
}

declare global {
  interface HTMLElementTagNameMap {
    'whos-out-widget-new': WhosOutWidgetNew
  }
}