import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('card-list')
export class CardList extends LitElement {
  @property({ type: String })
  title = 'Leave Balances';

  // The data will be passed as JSON (string or object)
  @property({ type: Object })
  leaves: Record<string, number | string> = {};

  // If given as an attribute string, parse it
  updated(changedProps: Map<string, unknown>) {
    if (changedProps.has('leaves') && typeof this.leaves === 'string') {
      try {
        this.leaves = JSON.parse(this.leaves);
      } catch (e) {
        console.error('Invalid JSON in leaves attribute', e);
        this.leaves = {};
      }
    }
  }

  render() {
    const entries = Object.entries(this.leaves || {});

    return html`
      <div class="container">
        <div class="header">${this.title}</div>
        ${entries.length > 0
          ? html`
              <div class="cards">
                ${entries.map(
                  ([type, count]) => html`
                    <div class="card">
                      <div class="label">${type}</div>
                      <div class="value">${count}</div>
                    </div>
                  `
                )}
              </div>
            `
          : html`
              <div class="empty-state">
                No leave balances available.
              </div>
            `}
      </div>
    `;
  }

  // static styles = css`
  //   :host {
  //     display: block;
  //     font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
  //       Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji;
  //     color: #111827;
  //   }

  //   .container {
  //     border: 1px solid #d1d5db;
  //     border-radius: 8px;
  //     background: #ffffff;
  //     padding: 24px;
  //     max-width: 900px;
  //     margin: 0 auto;
  //     box-sizing: border-box;
  //   }

  //   .header {
  //     font-size: 1.125rem;
  //     font-weight: 600;
  //     margin-bottom: 24px;
  //   }

  //   .cards {
  //     display: flex;
  //     flex-wrap: wrap;
  //     gap: 24px;
  //     justify-content: center;
  //   }

  //   .card {
  //     background: #f3f4f6;
  //     border: 1px solid #e5e7eb;
  //     border-radius: 6px;
  //     width: 160px;
  //     min-width: 160px;
  //     min-height: 160px;
  //     aspect-ratio: 1 / 1;
  //     box-sizing: border-box;
  //     display: flex;
  //     flex-direction: column;
  //     align-items: center;
  //     justify-content: center;
  //     gap: 12px;
  //     padding: 16px;
  //     text-align: center;
  //   }

  //   .label {
  //     color: #374151;
  //     margin: 0;
  //   }

  //   .value {
  //     font-size: 20px;
  //     font-weight: 600;
  //     color: #111827;
  //   }

  //   .empty-state {
  //     text-align: center;
  //     color: #6b7280;
  //     padding: 24px;
  //   }
  // `;

  static styles = css`
  :host {
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: #1a1a1a;
  }

  .container {
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    background: #ffffff;
    padding: 24px;
    max-width: 900px;
    margin: 0 auto;
    box-sizing: border-box;
    box-shadow: 0 2px 8px rgba(107, 70, 193, 0.08);
  }

  .header {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 24px;
    color: #6b46c1;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
  }

  .card {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    width: 160px;
    min-width: 160px;
    min-height: 160px;
    aspect-ratio: 1 / 1;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 2px 6px rgba(107, 70, 193, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(107, 70, 193, 0.15);
  }

  .label {
    color: #6b7280;
    margin: 0;
    font-size: 0.875rem;
    font-weight: 500;
  }

  .value {
    font-size: 20px;
    font-weight: 600;
    color: #6b46c1;
    margin: 0;
  }

  .empty-state {
    text-align: center;
    color: #6b7280;
    padding: 24px;
  }
`;
}

export { LitElement } from 'lit';

if (typeof globalThis !== 'undefined') {
  (globalThis as any).CardList = (globalThis as any).CardList || {};
  (globalThis as any).CardList.LitElement = LitElement;
}

declare global {
  interface HTMLElementTagNameMap {
    'card-list': CardList
  }
}