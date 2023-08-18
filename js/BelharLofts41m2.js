const apartmentLofts41 = {
  address1: "Belhar, Western Cape",
  name: "Belhar lofts - 41㎡",
  rooms: 3,
  bathroom: 1.5,
  garage: 1,
  price: 746000,
  status: "avadibal",
  undertext: "insert text",
  imageUrl1: "assets/images/41m2 Phase 3 Belhar Lofts/front img.jpeg",
  SquareMeter: "41㎡",
  undertext: "insert text",
  front_discription:
    "Get your stunning new modan house today, dont think twice about your familys futher!",
  slideImg01: "assets/images/41m2 Phase 3 Belhar Lofts/1.jpeg",
  slideImg02: "assets/images/41m2 Phase 3 Belhar Lofts/2.jpeg",
  slideImg03: "assets/images/41m2 Phase 3 Belhar Lofts/3.jpeg",
  slideImg04: "assets/images/41m2 Phase 3 Belhar Lofts/4.jpeg",
  slideImg05: "assets/images/41m2 Phase 3 Belhar Lofts/5.jpeg",
  slideImg06: "assets/images/41m2 Phase 3 Belhar Lofts/6.jpeg",
  slideImg07: "assets/images/41m2 Phase 3 Belhar Lofts/7.jpeg",
  slideImg08: "assets/images/41m2 Phase 3 Belhar Lofts/8.jpeg",
  slideImg09: "assets/images/41m2 Phase 3 Belhar Lofts/9.jpeg",
  slideImg10: "assets/images/41m2 Phase 3 Belhar Lofts/10.jpeg",

  changeStatusPending: function () {
    this.status = "Low Amount left";
  },

  changeStatusSold: function () {
    this.status = "Sold Out";
  },
};


const house4 = apartmentLofts41.price;

function populateImage_apartmentLofts41m2() {
  document.getElementById("img1").src = apartmentLofts41.slideImg01;
  document.getElementById("img2").src = apartmentLofts41.slideImg02;
  document.getElementById("img3").src = apartmentLofts41.slideImg03;
  document.getElementById("img4").src = apartmentLofts41.slideImg04;
  document.getElementById("img5").src = apartmentLofts41.slideImg05;
  document.getElementById("img6").src = apartmentLofts41.slideImg06;
  document.getElementById("img7").src = apartmentLofts41.slideImg07;
  document.getElementById("img8").src = apartmentLofts41.slideImg08;
  document.getElementById("img9").src = apartmentLofts41.slideImg09;
  document.getElementById("img10").src = apartmentLofts41.slideImg10;

}



document.getElementById("houseImg4").src = apartmentLofts41.imageUrl1;
document.getElementById("nameLofts41").innerHTML = apartmentLofts41.name;
document.getElementById("priceLofts41").innerHTML = apartmentLofts41.price;
document.getElementById("addressLofts41").innerHTML = apartmentLofts41.address1;
document.querySelector(".frontDiscription41").innerHTML = apartmentLofts41.undertext;



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
  document.getElementById("inputPurchasePrice").value = apartmentLofts41.price;
  console.log(apartmentLofts41.price);
}
