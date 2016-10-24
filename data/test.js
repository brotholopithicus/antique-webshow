const fs = require('fs');
const path = require('path');

fs.readFile(path.resolve(__dirname, 'states.json'), (err, file) => {
    if (err) throw err;
    let f = JSON.parse(file.toString());
    let keys = Object.keys(f);
    let data = [];
    keys.forEach(key => {
        data.push({ name: f[key], value: key});
    })
    console.log(data);
});
