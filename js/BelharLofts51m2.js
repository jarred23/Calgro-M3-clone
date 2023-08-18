const apartmentLofts51 = {
  address: "Belhar, Western Cape",
  rooms: 3,
  bathroom: 1.5,
  garage: 1,
  price: 838000,
  name: "Belhar Lofts - 51㎡",
  status: "avadibal",
  imageUrl: "assets/images/Belhar lofts full cover image1.jpeg",
  SquareMeter: "51㎡",
  front_discription: "Belhar Lofts wondering",
  slideImg01:
    "assets/images/51m2 Belhar Lofts/51m2 Belhar Lofts kitchen_living room.img.jpg",
  slideImg02:
    "assets/images/51m2 Belhar Lofts/51m2 Belhar lofts_living room.img.jpg",
  slideImg03:
    "assets/images/51m2 Belhar Lofts/51m2 Belhar lofts _living room(2).img.jpg",
  slideImg04:
    "assets/images/51m2 Belhar Lofts/51m2 Belhar Lofts_bathroom_img.jpg",
  slideImg05:
    "assets/images/51m2 Belhar Lofts/51m2 Belhar Lofts_Bedroom 1.img.jpg",
  slideImg06:
    "assets/images/51m2 Belhar Lofts/51m2 Belhar Lofts_Bedroom 2.img.jpg",

  changeStatusPending: function () {
    this.status = "Low Amount left";
  },

  changeStatusSold: function () {
    this.status = "Sold Out";
  },
};

const house3 = apartmentLofts51.price;

function populateImage_apartmentLofts51m2() {
  document.getElementById("img01").src = apartmentLofts51.slideImg01;
  document.getElementById("img02").src = apartmentLofts51.slideImg02;
  document.getElementById("img03").src = apartmentLofts51.slideImg03;
  document.getElementById("img04").src = apartmentLofts51.slideImg04;
  document.getElementById("img05").src = apartmentLofts51.slideImg05;
  document.getElementById("img06").src = apartmentLofts51.slideImg06;
}


document.getElementById("houseImg3").src = apartmentLofts51.imageUrl;
document.getElementById("nameLofts51").innerHTML = apartmentLofts51.name;
document.getElementById("priceLofts51").innerHTML = apartmentLofts51.price;
document.getElementById("addressLofts51").innerHTML = apartmentLofts51.address;
document.getElementById("frontDiscription51").innerHTML = apartmentLofts51.front_discription;




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
  document.getElementById("inputPurchasePrice").value = apartmentLofts51.price;
  console.log(apartmentLofts51.price);
}
