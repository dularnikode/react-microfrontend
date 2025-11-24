import faker from 'faker';

const cart  = `<div>You have ${faker.random.number()} items in your cart</div>`;


document.querySelector('#dev-cart').innerHTML = cart;