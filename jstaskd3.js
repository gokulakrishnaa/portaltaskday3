//JS Task Day 3 (Q.1)
const details = [
    {
        "name": "Gokul",
        "id": 123,
        "occupation": "Student",
        "state": "Tamilnadu",
        "country": "India"
    },
    {
        "name": "Vikram",
        "id": 234,
        "occupation": "Singer",
        "state": "Karnataka",
        "country": "India"
    },
    {
        "name": "Ranjan",
        "id": 345,
        "occupation": "Photographer",
        "state": "Kerela",
        "country": "India"
    },
    {
        "name": "Vijay",
        "id": 456,
        "occupation": "Musician",
        "state": "Maharastra",
        "country": "India"
    }
];

for(var i=0; i<details.length; i++) {
    const a = details[i].state;
    console.log(a);
}

for(var g in details) {
    const b = details[g].id;
    console.log(b);
}

for(var g in details) {
    console.log(g, details[g].occupation);
}


for(var it of Object.entries(details)) {
    console.log(it);
}

Object.entries(details).forEach(entry => {
    const[key, value] = entry;
    console.log(key,value);
});







