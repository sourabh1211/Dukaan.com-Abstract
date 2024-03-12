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
        name: 'electric press',
        image: '2.1.jpeg',
        price: 1500
    },
    {
        id: 2,
        name: 'electric trimmer',
        image: '2.2.jpg',
        price: 1500
    },
    {
        id: 3,
        name: 'electric kettle',
        image: '2.3.jpeg',
        price: 800
    },
    {
        id: 4,
        name: 'press',
        image: '2.4.jpeg',
        price: 1800
    },
    {
        id: 5,
        name: 'ear dopes',
        image: '2.5.jpeg',
        price: 1399
    },
    {
        id: 6,
        name: 'electric heater',
        image: '2.6.jpeg',
        price: 1899
    },
    {
        id: 7,
        name: 'i-phone',
        image: '2.7.png',
        price: 4999
    },
    {
        id: 8,
        name: 'macbook',
        image: '2.8.jpeg',
        price: 129999
    },
    {
        id: 9,
        name: 'hp-laptop',
        image: '2.9.jpeg',
        price: 59999
    },
    {
        id: 10,
        name: 'realme 9i',
        image: '2.10.jpeg',
        price: 14499
    },
    {
        id: 11,
        name: 'fan',
        image: '2.11.jpeg',
        price: 1199
    },
    {
        id: 12,
        name: 'bulb',
        image: '2.12.webp',
        price: 130
    },
    {
        id: 13,
        name: 'extension board',
        image: '2.13.jpeg',
        price: 250
    },
    {
        id: 14,
        name: 'electric water bottle',
        image: '2.14.jpg',
        price: 499
    },
    {
        id: 15,
        name: 'apple watch',
        image: '2.15.jpg',
        price: 49999
    },
    {
        id: 16,
        name: 'fitness band',
        image: '2.16.jpeg',
        price: 1299
    },
    {
        id: 17,
        name: 'keypad phone ',
        image: '2.17.jpeg',
        price: 1599
    },
    {
        id: 18,
        name: 'geaser',
        image: '2.18.jpeg',
        price: 29999
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

