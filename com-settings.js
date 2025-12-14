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
        <div id="mn">Mongolian</div>
        <div id="en">English</div>
        <div id="ru">Russian</div>
        <div id="kr">Korean</div>
        <div id="ch">Chinese</div>
      </div>
    `;
  }

  attachLangHandlers() {
    const subtitle = document.getElementById('subtitle');
    if (!subtitle) return;

    const texts = {
      mn: 'Та явах цэсн дээр дарж хаашаа явахаа сонгох боломжтой.',
      en: 'Tap the Walk button and choose where you want to go.',
      ru: 'Нажмите кнопку «Явах» и выберите, куда хотите пойти.',
      kr: '“Явах” 버튼을 눌러 이동할 곳을 선택하세요.',
      ch: '点击“Явах”按钮选择要前往的位置。'
    };
  }
}

window.customElements.define('com-settings', Settings);
