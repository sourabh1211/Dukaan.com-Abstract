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
        name: 'The Ordinary: clear set',
        image: '1.png',
        price: 1283.27
    },
    {
        id: 2,
        name: 'Cerave Hydrating Cleanser',
        image: '2.png',
        price: 200
    },
    {
        id: 3,
        name: 'Revolution Skincare Rose Quartz Facial Roller',
        image: '3.png',
        price: 500
    },
    {
        id: 4,
        name: 'Bath and Body Works: Fresh Cut Lilacs (gift set)',
        image: '4.png',
        price: 2500
    },
    {
        id: 5,
        name: 'Bath and Body Works: 90s fragrance kit ',
        image: '5.png',
        price: 2000
    },
    {
        id: 6,
        name: 'Bio-Oil skincare oil',
        image: '6.png',
        price: 260
    },
    {
        id: 7,
        name: 'Pantene 4-Step Hair Care Range',
        image: '7.png',
        price: 780
    },
    {
        id: 8,
        name: 'Expoliating Back Scrubber',
        image: '8.png',
        price: 55
    },
    {
        id: 9,
        name: 'Cetaphil: moisturizer with spf',
        image: '9.png',
        price: 130
    },
    {
        id: 10,
        name: '18 high quality makeup brushes',
        image: '10.png',
        price: 499
    },
    {
        id: 11,
        name: 'Bobby Brown: Cool Girl Luxe Eye and Cheek Pallete- 80g',
        image: '11.png',
        price: 5000
    },
    {
        id: 12,
        name: 'Huda Beauty Foundation and Concealer Combo',
        image: '12.png',
        price: 6500
    },
    {
        id: 13,
        name: 'Precision Eye Liner',
        image: '13.png',
        price: 1000
    },
    {
        id: 14,
        name: 'CHARLOTTE TILBURY: Pillow Talk travel-sized mascara 4ml',
        image: '14.png',
        price: 1160
    },
    {
        id: 15,
        name: 'Morphe x Meredith Duxbury Lip Liner & Glaze Duo kit',
        image: '15.png',
        price: 3000
    },
    {
        id: 16,
        name: 'Laneige: Pink lemonade lip sleeping mask 20g',
        image: '16.png',
        price: 660
    },
    {
        id: 17,
        name: 'Love Beauty and Plannet Sheetmask Combo',
        image: '17.png',
        price: 576
    },
    {
        id: 18,
        name: 'Chemist At Play Aqua Fragrance Under Arm Roll',
        image: '18.png',
        price: 478
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