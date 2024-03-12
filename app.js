let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Great value classic cooking oil',
        image: '1.png',
        price: 2500
    },
    {
        id: 2,
        name: 'Tata sampann Toor Daal',
        image: '2.png',
        price: 90
    },
    {
        id: 3,
        name: 'Bournvita',
        image: '3.png',
        price: 250
    },
    {
        id: 4,
        name: 'Colgate',
        image: '4.png',
        price: 140
    },
    {
        id: 5,
        name: 'Vim gel',
        image: '5.png',
        price: 70
    },
    {
        id: 6,
        name: 'Surf excel',
        image: '6.png',
        price: 200
    },
    {
        id: 7,
        name: 'Dove soap',
        image: '7.png',
        price: 37
    },
    {
        id: 8,
        name: 'Britania-Digestive buiscuit',
        image: '8.png',
        price: 55
    },
    {
        id: 9,
        name: 'Maggi',
        image: '9.png',
        price: 14
    },
    {
        id: 10,
        name: 'AAAR masale',
        image: '10.png',
        price: 499
    },
    {
        id: 11,
        name: 'Aashirwad multigrain aata ',
        image: '11.png',
        price: 460
    },
    {
        id: 12,
        name: 'Tata tea',
        image: '12.png',
        price: 130
    },
    {
        id: 13,
        name: 'India gate basmati rice',
        image: '13.png',
        price: 950
    },
    {
        id: 14,
        name: 'Scotch brite',
        image: '14.png',
        price: 21
    },
    {
        id: 15,
        name: 'Aer room fragrance spray',
        image: '15.png',
        price: 203
    },
    {
        id: 16,
        name: 'Aachar',
        image: '16.png',
        price: 120
    },
    {
        id: 17,
        name: 'Broom stick',
        image: '17.png',
        price: 100
    },
    {
        id: 18,
        name: 'Amul ghee',
        image: '18.png',
        price: 699
    }
    

];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}