//all objects//

const houseOliveGrove = {
  address: "12 one street",
  rooms: "3 Bedrooms",
  bathroom: "Bathrooms 1.5",
  garage: 1,
  price: 1355000,
  name: "Olive Grove ",
  status: "avadibal",
  transfer: "No transfer or Bond costs",
  SquareMeter: "106㎡",
  front_discription:
    "Get your stunning new modan house today, dont think twice about your familys futher!",
  imageUrl: "assets/images/Olive Grove/olive grove outside view.jpeg",
  slideImg: "assets/images/Olive Grove/olive grove outside view.jpeg",
  slideImg1: "assets/images/Olive Grove/Olive Grove_Belhar_Balcony.img.jpg",
  sliderImg2: "assets/images/Olive Grove/Olive Grove_Belhar_bathroom 1.img.jpg",
  sliderImg3: "assets/images/Olive Grove/Olive Grove_Belhar_Bathroom (2).img.jpg",
  sliderImg4: "assets/images/Olive Grove/Olive Grove_Belhar_Bedroom 1.img.jpg",
  sliderImg5: "assets/images/Olive Grove/Olive Grove_Belhar_Bedroom 2.img.jpg",
  sliderImg6: "assets/images/Olive Grove/Olive Grove_Belhar_Main Bedroom.img.jpg",
  sliderImg7: "assets/images/Olive Grove/Olive Grove_Belhar_outside of house.img.jpg",
  sliderImg8: "assets/images/Olive Grove/Olive Grove_Belhar_Floor Plan_bottom.img.jpg",
  sliderImg9: "assets/images/Olive Grove/Olive Grove_Belhar_Floor Plan_top.img.jpg",
  sliderImg10: "assets/images/Olive Grove/Olive Grove_Belhar_bathroom 9.img.jpg",
  sliderImg11: "assets/images/Olive Grove/Olive Grove_Belhar_Floor Plan_full plan.img.jpg",

  changeStatusPending: function () {
    this.status = "Low Amount Left";
  },

  changeStatusSold: function () {
    this.status = "Sold Out";
  },
};

const house1 = houseOliveGrove.price;


//calling images for the slider show//
function populateImage_houseOliveGrove() {
  document.getElementById("img1").src = houseOliveGrove.slideImg;
  document.getElementById("img2").src = houseOliveGrove.slideImg1;
  document.getElementById("img3").src = houseOliveGrove.sliderImg2;
  document.getElementById("img4").src = houseOliveGrove.sliderImg3;
  document.getElementById("img5").src = houseOliveGrove.sliderImg4;
  document.getElementById("img6").src = houseOliveGrove.sliderImg5;
  document.getElementById("img7").src = houseOliveGrove.sliderImg6;
  document.getElementById("img8").src = houseOliveGrove.sliderImg7;
  document.getElementById("img9").src = houseOliveGrove.sliderImg8;
  document.getElementById("img10").src = houseOliveGrove.sliderImg9;
}

//Olive grove text in for the main view in listings//
document.getElementById("houseImg1").src = houseOliveGrove.imageUrl;
document.getElementById("oliveName").innerHTML = houseOliveGrove.name;
document.getElementById("priceolivegrove").innerHTML = houseOliveGrove.price;
document.getElementById("oliveDescription").innerHTML = houseOliveGrove.front_discription;
document.querySelector(".bondTransfer").innerHTML = houseOliveGrove.transfer;
document.querySelector(" #bathOlive").innerHTML = houseOliveGrove.bathroom;
document.getElementById("addressOlive").innerHTML = houseOliveGrove.address;
document.getElementById("roomsOlive").innerHTML = houseOliveGrove.rooms;
document.getElementById("garageOlive").innerHTML = houseOliveGrove.garage;
document.getElementById("M2Olive").innerHTML = houseOliveGrove.SquareMeter;

//Olive grove information in script//


 



const apartmentLofts = {
  address: "11 one street",
  rooms: 3,
  bathroom: 1.5,
  garage: 0,
  price: "1,239,000.00",
  name: "Belhar Lofts - 3 Beds",
  status: "avadibal",
  imageUrl: "Belhar lofts full cover image.jpeg",
  SquareMeter: "77㎡ - 81㎡",

  changeStatusPending: function () {
    this.status = "Low Amount Left";
  },

  changeStatusSold: function () {
    this.status = "Sold Out";
  },
};

document.getElementById("houseImg2").src = apartmentLofts.imageUrl;
document.getElementById("3bedName").innerHTML = apartmentLofts.name;
document.getElementById("priceloft").innerHTML = apartmentLofts.price;
document.getElementById("addressLoft3").innerHTML = apartmentLofts.address;

const apartmentLofts51 = {
  address: "12 one street",
  rooms: 3,
  bathroom: 1.5,
  garage: 1,
  price: "Starting at R838,000.00",
  name: "Belhar Lofts - 51㎡",
  status: "avadibal",
  imageUrl: "assets/images/Belhar lofts full cover image1.jpeg",
  SquareMeter: "51㎡",
  front_discription: "Belhar Lofts wondering",

  changeStatusPending: function () {
    this.status = "Low Amount left";
  },

  changeStatusSold: function () {
    this.status = "Sould Out";
  },
};
document.getElementById("houseImg3").src = apartmentLofts51.imageUrl;
document.getElementById("nameLofts51").innerHTML = apartmentLofts51.name;
document.getElementById("priceLofts51").innerHTML = apartmentLofts51.price;
document.getElementById("addressLofts51").innerHTML = apartmentLofts51.address;
document.getElementById("frontDiscription51").innerHTML =
  apartmentLofts.front_discription;

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

//Photos//

function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}









//export function

function getIds() {
  document.getElementById("inputPurchasePrice").value = houseOliveGrove.price;
  console.log(houseOliveGrove.price);
}

