const geocoder = require('geocoder');
let req = {
    body: {
        title: 'Title',
        description: 'Description',
        date: '2016-10-17',
        time: '15:00',
        address: '53 Oak Hill Rd',
        city: 'Harvard',
        state: 'MA'
    }
}

let addressStr = `${req.body.address}, ${req.body.city}, ${req.body.state}`;
geocoder.geocode(addressStr, (err, response) => {
    if (err) throw err;
    let location = response.results[0].geometry.location;
    let coords = {
        latitude: location.lat,
        longitude: location.lng
    }
})
