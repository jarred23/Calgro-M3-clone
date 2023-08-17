const DegoedeHoop = {
  address: "C0670 Ultra Ave, Scottsdene, Cape Town, 7570",
  name: "De Goede Hoop",
  rooms: 2,
  bathroom: 1,
  garage: 0,
  price: 570000,
  status: "avaidable",
  imageUrl: "house-1 copy.jpg",
  SquareMeter: "40㎡",
  undertext: "insert text",
  slideImg1: "assets/images/De Goede Hoop/1.png",
  slideImg2: "assets/images/De Goede Hoop/2.png",
  slideImg3: "assets/images/De Goede Hoop/3.png",
  slideImg4: "assets/images/De Goede Hoop/4.png",
  slideImg5: "assets/images/De Goede Hoop/5.png",
  slideImg6: "assets/images/De Goede Hoop/6.jpg",
  slideImg7: "assets/images/De Goede Hoop/7.jpg",
  slideImg8: "assets/images/De Goede Hoop/8.jpg",
  slideImg9: "assets/images/De Goede Hoop/9.jpg",
  slideImg10: "assets/images/De Goede Hoop/10.jpg",

  changeStatusPending: function () {
    this.status = "Low Amount Left";
  },

  changeStatusSold: function () {
    this.status = "Sold Out";
  },
};
const house5 = DegoedeHoop.price;




function populateImage_DeGoedeHoop() {
  document.getElementById("img1").src = DegoedeHoop.slideImg1;
  document.getElementById("img2").src = DegoedeHoop.slideImg2;
  document.getElementById("img3").src = DegoedeHoop.slideImg3;
  document.getElementById("img4").src = DegoedeHoop.slideImg4;
  document.getElementById("img5").src = DegoedeHoop.slideImg5;
  document.getElementById("img6").src = DegoedeHoop.slideImg6;
  document.getElementById("img7").src = DegoedeHoop.slideImg7;
  document.getElementById("img8").src = DegoedeHoop.slideImg8;
  document.getElementById("img9").src = DegoedeHoop.slideImg9;
  document.getElementById("img10").src = DegoedeHoop.slideImg10;


}

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
  document.getElementById("inputPurchasePrice").value = DegoedeHoop.price;
  console.log(DegoedeHoop.price);
}

