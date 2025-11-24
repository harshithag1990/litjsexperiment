import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('user-avatar')
export class UserAvatar extends LitElement {
  
  @property({ type: String }) image = '';
  @property({ type: String }) name = '';
  @property({ type: String }) firstName = '';
  @property({ type: String }) lastName = '';

  static styles = css`
    :host {
      display: inline-block;
      /* Default size from list-widget */
      --avatar-size: 44px; 
    }

    /* Shared styles for Image and Placeholder */
    .avatar, .avatar-placeholder {
      width: var(--avatar-size);
      height: var(--avatar-size);
      border-radius: 50%;
      object-fit: cover;
      flex-shrink: 0;
      box-sizing: border-box;
      
      /* EXACT STYLE FROM LIST-WIDGET: Purple translucent border */
      /*border: 2px solid rgba(138, 43, 226, 0.15);*/ 
      
      cursor: pointer;
      transition: opacity 0.2s ease;
      display: block;
    }

    /* EXACT STYLE FROM LIST-WIDGET: Gradient Background */
    .avatar-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #8a2be2 0%, #9370db 100%);
      color: white;
      
      /* Font styling from list-widget */
      font-weight: 600;
      font-size: 0.875rem;
      letter-spacing: 0.02em;
      user-select: none;
    }

    /* Hover effect from list-widget (.item:hover opacity, applied to avatar here) */
    .avatar:hover, .avatar-placeholder:hover {
      opacity: 0.8;
    }

    /* Responsive adjustments from list-widget */
    @media (max-width: 768px) {
      :host {
        --avatar-size: 40px;
      }
      .avatar-placeholder {
        font-size: 0.8125rem;
      }
    }
  `;

  private getInitials(): string {
    if (this.firstName && this.lastName) {
      return `${this.firstName.charAt(0)}${this.lastName.charAt(0)}`.toUpperCase();
    }
    if (this.name) {
      const names = this.name.trim().split(' ');
      if (names.length >= 2) {
        return `${names[0].charAt(0)}${names[1].charAt(0)}`.toUpperCase();
      }
      return this.name.substring(0, 2).toUpperCase();
    }
    return '--';
  }

  render() {
    if (this.image && this.image.trim() !== '') {
      return html`
        <img 
          class="avatar" 
          src="${this.image}" 
          alt="${this.name}" 
          title="${this.name}"
        >
      `;
    }

    return html`
      <div 
        class="avatar-placeholder" 
        title="${this.name}"
      >
        ${this.getInitials()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'user-avatar': UserAvatar
  }
}