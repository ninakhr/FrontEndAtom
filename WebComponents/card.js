const template = document.createElement('template');
template.innerHTML = `
    <style>
    .x-user-card {
        display: flex;
        width: 300px;
        margin: 60px;
        align-items: center;
        justify-content: space-around;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
    }
   
    h1 {
        color:  rgb(23, 32, 32);
        font-size: 15px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    }
    img {
        border-radius: 50%;
        height: 80px;
        margin:5px;
    
    }
    </style>
    <div class="x-user-card">
    <img></img>
     <div>
        <h1></h1>
     </div>
    </div>

`;

class UserCard extends HTMLElement {
    constructor(){
        super();

        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelector('h1').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');

    }
}

window.customElements.define('x-user-card', UserCard);