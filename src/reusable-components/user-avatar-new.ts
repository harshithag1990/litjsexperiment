import { html, css, LitElement } from 'lit';
export { LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { allThemes } from '../styles/themes/all-themes.js';

// 1. Define Types right here (No need for separate file)
type Size = 'sm' | 'md' | 'lg' | 'xl';
type Shape = 'circle' | 'square' | 'rounded';

@customElement('user-avatar-new')
export class UserAvatarNew extends LitElement {
  
  // 2. Styles: Load Themes first, then define Structure inline
  static styles = [
    allThemes, 
    css`
      :host { display: inline-block; line-height: 0; }
      
      /* Size Overrides (Cleaner Syntax) */
      :host([size="sm"]) { --size: 32px; --font: 0.75rem; }
      :host([size="lg"]) { --size: 64px; --font: 1.25rem; }
      :host([size="xl"]) { --size: 96px; --font: 2rem; }

      /* Shape Overrides */
      :host([shape="square"])  { --radius: 0; }
      :host([shape="rounded"]) { --radius: 8px; }

      .avatar {
        width: var(--size);
        height: var(--size);
        border-radius: var(--radius);
        background: var(--bg);
        color: var(--color);
        border: var(--border);
        
        /* Flexbox for Initials */
        display: flex;
        align-items: center;
        justify-content: center;
        
        /* Font & Image props */
        font-weight: 600;
        font-size: var(--font);
        object-fit: cover;
        box-sizing: border-box;
        user-select: none;
      }
    `
  ];

  @property({ type: String }) image = '';
  @property({ type: String }) name = '';
  
  // 3. Simplified Properties (We don't need Typescript Interfaces for simple props)
  @property({ reflect: true }) theme = 'default';
  @property({ reflect: true }) size: Size = 'md';
  @property({ reflect: true }) shape: Shape = 'circle';

  @state() private _error = false;

  // 4. Concise Logic: One-liner Initials
  private get initials() {
    if (!this.name) return '--';
    const parts = this.name.trim().split(/\s+/);
    // Takes first letter of first two words, OR first 2 letters of single word
    return (parts.length > 1 ? parts[0][0] + parts[1][0] : parts[0].slice(0, 2)).toUpperCase();
  }

  render() {
    const showImg = this.image && !this._error;

    return html`
      <div title="${this.name}" class="avatar">
        ${showImg 
          ? html`<img class="avatar" src="${this.image}" alt="${this.name}" @error="${() => this._error = true}">`
          : this.initials
        }
      </div>
    `;
  }
}


if (typeof globalThis !== 'undefined') {
  (globalThis as any).MyElement = (globalThis as any).MyElement || {};
  (globalThis as any).MyElement.LitElement = LitElement;
}

declare global {
  interface HTMLElementTagNameMap {
    'user-avatar-new': UserAvatarNew;
  }
}