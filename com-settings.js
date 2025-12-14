class Settings extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.handleToggle = this.handleToggle.bind(this);
  }

  connectedCallback() {
    const settings = document.getElementById('settings');
    if (!settings) {
      console.warn('#settings checkbox not found');
      return;
    }
    settings.addEventListener('change', this.handleToggle);
  }

  disconnectedCallback() {
    const settings = document.getElementById('settings');
    if (settings) {
      settings.removeEventListener('change', this.handleToggle);
    }
  }

  handleToggle(e) {
    if (e.target.checked) {
      this.render();
    } else {
      this.shadowRoot.innerHTML = '';
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        #cc {
          position: absolute;
          top: 72px;
          right: 3px;
          pointer-events: auto;
          padding: 1vw;
          width: 10vw;
          height: fit-content;
          color: var(--p-col, #000);
          background-color: var(--stngs-bckcol, #ffffff);
          border-radius: 8px;
          font-family: sans-serif;
        }
        #cc > div {
          width: 80%;
          height: 5vh;
          cursor: pointer;
          margin: 1px;
          display: flex;
          border-radius: 6px;
          align-items: center;
          margin-left: 4px;
        }
        #cc > div:hover {
          background-color: hsl(0, 0%, 100%, 0.1);
        }
      </style>
      <div id="cc">
        <h3>Subtitle</h3>
        <div id="mn" class="languages">Mongolian</div>
        <div id="en" class="languages">English</div>
        <div id="ru" class="languages">Russian</div>
        <div id="kr" class="languages">Korean</div>
        <div id="ch" class="languages">Chinese</div>
      </div>
    `;
  }

  attachLangHandlers() {
    const subtitle = document.getElementById('subtitle');
    if (!subtitle) return;
    const languages = document.querySelectorAll('.languages');
    languages.forEach(lan => {
      lan.addEventListener('click', () => {
        updateLan(lan.id);
      });
    })
  }
}

window.customElements.define('com-settings', Settings);
