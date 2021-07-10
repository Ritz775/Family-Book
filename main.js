var names = ["sIRISHA", "Sirisha Inapuri", "Ravi Adusumilli"];
var images = ["brother.jpg", "mom.jpg", "dad.jpg"];

var i = 0;

function nextslide() {
  document.getElementById("names_of_family").innerHTML = names[i];
  document.getElementsById("photos_of_family").src = images[i];
  i++;

  var family = 5;
  if (i > family) i = 0;
}
