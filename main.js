var images = ["images/b597ef5f-782e-424f-b234-a5626058e7ba.png", "images/00a6a606-5b9f-422a-af4c-4cf54db264c1.jpg", "images/991f842d-22ff-44fd-9d90-8f3b46b05fb0.jpg", "images/a7c18386-5db2-4981-8f93-7b5de6436cb3.jpg"]; // قائمة الصور

var imageIndex = 0;
var imageElement = document.getElementById("sec-c074");

setInterval(changeBackground, 2500); // تغيير الخلفية كل ثانيتين

function changeBackground() {
  imageIndex = (imageIndex + 1) % images.length;
  var imageUrl = images[imageIndex];
  imageElement.style.background = `url(${imageUrl}) center center/cover no-repeat`;
}



