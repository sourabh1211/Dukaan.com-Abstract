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
        name: 'Ven Heusen men 3 piece suit',
        image: '1.png',
        price: 18500
    },
    {
        id: 2,
        name: 'H&M men blue jacket',
        image: '2.png',
        price: 4999
    },
    {
        id: 3,
        name: 'Monte Carlo girls short dress',
        image: '3.png',
        price: 999
    },
    {
        id: 4,
        name: 'Calvin Klein women wide leg jeans',
        image: '4.png',
        price: 3200
    },
    {
        id: 5,
        name: 'Mens south indian kurta set ',
        image: '5.png',
        price: 5999
    },
    {
        id: 6,
        name: 'BIBA grey woolen jacket',
        image: '6.png',
        price: 1850
    },
    {
        id: 7,
        name: 'Peter England women short leather jacket',
        image: '7.png',
        price: 8900
    },
    {
        id: 8,
        name: 'Zara women western set for parties',
        image: '8.png',
        price: 5000
    },
    {
        id: 9,
        name: 'U.S.Polo white women shorts',
        image: '9.png',
        price: 2500
    },
    {
        id: 10,
        name: 'Women green printed saree',
        image: '10.png',
        price: 1599
    },
    {
        id: 11,
        name: 'Women pink kurta set  ',
        image: '11.png',
        price: 800
    },
    {
        id: 12,
        name: 'Brands Pinkish-cream women blazer',
        image: '12.png',
        price: 8900
    },
    {
        id: 13,
        name: 'Manish Malhotra brown gown',
        image: '13.png',
        price: 21000
    },
    {
        id: 14,
        name: 'Roadster black short dress',
        image: '14.png',
        price: 899
    },
    {
        id: 15,
        name: 'Bewakoof yellow oversized tshirt',
        image: '15.png',
        price: 1499
    },
    {
        id: 16,
        name: 'Jordan Khaki mens jacket',
        image: '16.png',
        price: 8999
    },
    {
        id: 17,
        name: 'Men blue denim jacket',
        image: '17.png',
        price: 1200
    },
    {
        id: 18,
        name: '5-year old kizer grey outfit',
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