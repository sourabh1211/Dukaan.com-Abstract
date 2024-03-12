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
        name: 'White Marble Effect Gold Flower Disc Ornament',
        image: '1.png',
        price: 5560
    },
    {
        id: 2,
        name: 'CULTI Decor Linfa scent reed diffuser 500m',
        image: '2.png',
        price: 1980
    },
    {
        id: 3,
        name: 'Black Bronx Artificial Plants Wall Plaque',
        image: '3.png',
        price: 500
    },
    {
        id: 4,
        name: 'Mini Pampas Grass',
        image: '4.png',
        price: 400
    },
    {
        id: 5,
        name: 'CEMABT Vases for Pampas Grass',
        image: '5.png',
        price: 2000
    },
    {
        id: 6,
        name: 'Arm Chair Luxurious - Upholstered Wood Couch - Relaxing 1 Seater Sofa Brown 790x750x770mm',
        image: '6.png',
        price: 3000
    },
    {
        id: 7,
        name: 'SOHO HOME Naomi linen table lamp',
        image: '7.png',
        price: 3000
    },
    {
        id: 8,
        name: 'Blue/Gold Abstract Framed Canvas Wall Art Set Of 2',
        image: '8.png',
        price: 4567
    },
    {
        id: 9,
        name: 'The Kitchen Floating Shelf',
        image: '9.png',
        price: 1986
    },
    {
        id: 10,
        name: 'Brown Bronx Coffee Wall Art',
        image: '10.png',
        price: 689
    },
    {
        id: 11,
        name: 'FERM LIVING Flow circular porcelain centrepiece 12.5cm ',
        image: '11.png',
        price: 1500
    },
    {
        id: 12,
        name: 'Antique Dancing Ganesha Idol',
        image: '12.png',
        price: 4699
    },
    {
        id: 13,
        name: 'Antique Gramophone Table Decorative Showpiece',
        image: '13.png',
        price: 3309
    },
    {
        id: 14,
        name: 'Coastal Living Margot Beds',
        image: '14.png',
        price: 1160
    },
    {
        id: 15,
        name: 'Cottage Country Antique Wall Clocks',
        image: '15.png',
        price: 3000
    },
    {
        id: 16,
        name: 'Indoor Buddha Fountain',
        image: '16.png',
        price: 6289
    },
    {
        id: 17,
        name: 'Animal Cushion',
        image: '17.png',
        price: 576
    },
    {
        id: 18,
        name: 'Outdoor Hanging Egg Chair',
        image: '18.png',
        price: 9999
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