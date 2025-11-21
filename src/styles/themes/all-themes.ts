// src/styles/themes/all-themes.ts
import { css } from 'lit';

export const allThemes = css`
  /* 1. GLOBAL DEFAULTS (Applied to everyone) */
  :host {
    /* UPDATED: Shortened names to match your new component */
    --size: 44px; 
    --font: 0.875rem;
    --bg: #e0e0e0;
    --color: #374151;
    --border: none;
    --radius: 50%;
  }

  /* 2. PURPLE THEME */
  :host([theme="purple"]) {
    --bg: linear-gradient(135deg, #8a2be2 0%, #9370db 100%);
    --color: white;
    --border: 2px solid #8a2be2;
  }

  /* 3. FOREST THEME */
  :host([theme="forest"]) {
    --bg: linear-gradient(135deg, #134e5e 0%, #71b280 100%);
    --color: #ffffff;
    --border: 2px solid #71b280;
  }

  /* 4. DARK THEME */
  :host([theme="dark"]) {
    --bg: #1f2937;
    --color: #f3f4f6;
    --border: 1px solid #374151;
  }
`;