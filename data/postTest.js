const geocoder = require('geocoder');
const faker = require('faker');

let address = {
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state()
}

console.log(address);
setTimeout(() => {
    process.exit(0);
}, 2000);
