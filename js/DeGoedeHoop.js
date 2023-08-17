const DegoedeHoop = {
  address: "12 one street",
  name: "De Goede Hoop",
  rooms: 2,
  bathroom: 1,
  garage: 0,
  price: "Starting at R570,000.00",
  status: "avaidable",
  imageUrl: "house-1 copy.jpg",
  SquareMeter: "40㎡",
  undertext: "insert text",

  changeStatusPending: function () {
    this.status = "Low Amount Left";
  },

  changeStatusSold: function () {
    this.status = "Sold Out";
  },
};

document.getElementById("houseImg5").src = DegoedeHoop.imageUrl;
document.getElementById("hoopName").innerHTML = DegoedeHoop.name;
document.getElementById("hoopPrice").innerHTML = DegoedeHoop.price;
document.getElementById("hoopAddress").innerHTML = DegoedeHoop.address;
document.querySelector(".HoopDisc").innerHTML = DegoedeHoop.undertext;
