const hometest2 = {
    address: "1 miller st",
    city: "London",
    state: "London",
    zip: "NW1 8JR",
    bedrooms: 3,
    price: 2000000,

};

window.localStorage.setItem("hometest2", JSON.stringify(hometest2));

let newObj = JSON.parse(localStorage.getItem("hometest2"));
console.log(JSON.parse(newObj));