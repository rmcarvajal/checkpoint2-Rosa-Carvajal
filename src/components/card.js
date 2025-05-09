class card extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <div class="card">
        <div class="card-img"></div>
        <h1>NAME</h1>
        <h2>Scientific name</h2>
        <h3>type</h3>
    </div>

    <style>
        .card{
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 500px;
    padding:15px;
    background-color: rgb(206, 194, 140);
    border-radius: 10px;
    font-family: Arial, Helvetica, sans-serif;
}

.card-img{
    width:300px;
    height:300px;
    background-color: blue;
    background-size: cover;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/5/53/Hot_dog_on_a_plate_-_Evan_Swigart.jpg);
}
    </style>
        `;
    }
}

export default card