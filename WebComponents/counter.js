class Counter extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open'});
    }

    get initial() {
        return this.getAttribute('initial');
    }

    set initial(val) {
        return this.setAttribute('initial', val);
    }

    static get observedAttributes() {
        return ['initial'];
    }

    attributeChangedCallback(prop, val1, val2) {
        if (prop === 'initial') {
            this.render();
            let btn1 = this.shadow.querySelector('#btn1');
             btn1.addEventListener('click', this.inc.bind(this));
             let btn2 = this.shadow.querySelector('#btn2');
             btn2.addEventListener('click', this.red.bind(this));
        }

    }

    inc() {
        this.initial++;
    }

    red() {
        this.initial--;
    }

    connectedCallback() {
        this.render();
        let btn1 = this.shadow.querySelector("#btn1");
        btn1.addEventListener('click', this.inc.bind(this));

        let btn2 = this.shadow.querySelector("#btn2");
        btn2.addEventListener('click', this.red.bind(this));
    }

    render() {
        this.shadow.innerHTML = `
        <button id='btn2' class='btn'>-</button>
        ${this.initial}
        <button id='btn1' class='btn'>+</button>`;
    }
}

window.customElements.define("x-counter", Counter);