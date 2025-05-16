

import card from "./components/card.js";



customElements.define('card-element',card);

fetch("../data/plants.json") 
    .then(response => response.json) 
    .then((data)=>{
        const cardContainer = document.querySelector(".container")
        const content = cardContainer.querySelectorAll("card-element")
        content.forEach((card,index) => {
            card.data = data[index + content.length]
        })
    }
    )
