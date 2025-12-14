class ComMap extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        const p = {
            1 : {
                a1 : {
                    top: '',
                    left: ''
                },

                a2 : {
                    top: '',
                    left: ''
                },

                a3 : {
                    top: '',
                    left: ''
                },

                a4 : {
                    top: '',
                    left: ''
                }  
            },
            
            2 : {
                a1 : {
                    top: '',
                    left: ''
                },

                a2 : {
                    top: '',
                    left: ''
                },

                a3 : {
                    top: '',
                    left: ''
                },

                a4 : {
                    top: '',
                    left: ''
                }  
            },

            3 : {
                a1 : {
                    top: '',
                    left: ''
                },

                a2 : {
                    top: '',
                    left: ''
                },

                a3 : {
                    top: '',
                    left: ''
                },

                a4 : {
                    top: '',
                    left: ''
                }  
            },

            4 : {
                a1 : {
                    top: '',
                    left: ''
                },

                a2 : {
                    top: '',
                    left: ''
                },

                a3 : {
                    top: '',
                    left: ''
                },

                a4 : {
                    top: '',
                    left: ''
                }  
            },
        }
    }

    connectedCallback() {
        const fl = document.getElementById('floor') || '<span id="floor">1</span>';
        this.render(fl.innerHTML || '1');
        const map = document.getElementById('map');
        map.addEventListener('click', ()=>{
            this.renderFull();
        });    
    }

    render(fl){
        this.shadowRoot.innerHTML = `<img src="${fl}.svg">`;
    }   

    renderFull(){
        this.shadowRoot.innerHTML = `
            <style>
                img{
                    width: 100%;
                    height: 100%;
                }
            </style>
            <header><h1>1 давхар</h1></header>
            <body>
                <img src='1.svg'>
            </body>
            <footer>
                <article>
                    <div></div>
                    <p></p>
                </article>
                <article>
                <article>
                    <div></div>
                    <p></p>
                </article>
            </footer>
        `;
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