import Root from "./Root/Root";

import card from "./components/card.js";

customElements.define('root-element', Root);

customElements.define('card-element',card);

fetch("http://192.168.131.101:8080/dca/api/plants") 
    .then(response => response.json) 
    .then((data)=>{
        const cards = card.data
    }
    )


    //no recuerdo como asignar datos de la api al componente