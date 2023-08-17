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

