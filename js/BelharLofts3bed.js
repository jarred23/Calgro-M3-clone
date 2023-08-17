const apartmentLofts = {
  address: "Proton Street, Belhar 8, Cape Town, 7493",
  rooms: "3",
  bathroom: "1.5",
  garage: 0,
  price: 1239000,
  name: "Belhar Lofts - 3 Beds",
  status: "avadibal",
  imageUrl: "assets/images/Belhar lofts full cover image1.jpeg",
  SquareMeter: "77㎡ - 81㎡",
  front_discription:
    "Get your stunning new modan house today, dont think twice about your familys futher!",
  slideImg01:
    "assets/images/Belhar Lofts_Loft apartment/Belhar Lofts_Loft apartment_full underground area.img.jpg",
  slideImg02:
    "assets/images/Belhar Lofts_Loft apartment/Belhar Lofts_loft apartment floor plan.img.jpg",
  sliderImg03:
    "assets/images/Belhar Lofts_Loft apartment/Belhar Lofts_Lofts apartments_kitchen_living room.img.jpg",

  changeStatusPending: function () {
    this.status = "Low Amount Left";
  },

  changeStatusSold: function () {
    this.status = "Sold Out";
  },
};

const house2 = apartmentLofts.price;

//Slide Images//
function populateImage_apartmentLofts() {
  document.getElementById("img11").src = apartmentLofts.slideImg01;
  document.getElementById("img21").src = apartmentLofts.slideImg02;
  document.getElementById("img31").src = apartmentLofts.sliderImg03;
}

//document.getElementById("addressLoft3").innerHTML = apartmentLofts.address;
document.getElementById("houseImg2").src = apartmentLofts.imageUrl;
document.getElementById("3bedName").innerHTML = apartmentLofts.name;
document.getElementById("priceloft").innerHTML = apartmentLofts.price;
document.getElementById("addressOlive").innerHTML = apartmentLofts.address;


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
  document.getElementById("inputPurchasePrice").value = apartmentLofts.price;
  console.log(apartmentLofts.price);
}
