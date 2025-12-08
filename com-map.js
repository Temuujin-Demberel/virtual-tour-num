class ComMap extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        const fl = document.getElementById('floor');
        this.render(fl.innerHTML);
        const map = fl.parentElement;
        map.addEventListenner('click', ()=>{
            this.renderFull();
        });    
    }

    render(fl){
        this.shadowRoot.innerHTML = `<img src="${fl}.svg">`;
    }

    renderFull(){
        
    }

    disconnectedCallback() {
        //implementation
    }

    attributeChangedCallback(name, oldVal, newVal) {
        //implementation
    }

    adoptedCallback() {
        //implementation
    }

}

window.customElements.define('com-map', ComMap);