const apartmentLofts41 = {
  address1: "111 one street",
  name: "Belhar lofts - 41㎡",
  rooms: 3,
  bathroom: 1.5,
  garage: 1,
  price: "R 746,000.00",
  status: "avadibal",
  undertext: "insert text",
  imageUrl1: "house-1.jpg",
  SquareMeter: "41㎡",
  undertext: "insert text",

  changeStatusPending: function () {
    this.status = "Low Amount left";
  },

  changeStatusSold: function () {
    this.status = "Sold Out";
  },
};

document.getElementById("houseImg4").src = apartmentLofts41.imageUrl1;
document.getElementById("nameLofts41").innerHTML = apartmentLofts41.name;
document.getElementById("priceLofts41").innerHTML = apartmentLofts41.price;
document.getElementById("addressLofts41").innerHTML = apartmentLofts41.address1;
document.querySelector(".frontDiscription41").innerHTML =
  apartmentLofts41.undertext;
