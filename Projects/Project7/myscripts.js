/* External JavaScript for Home.html
   Replace/merge with the head code from your Project 6 Graphics.html if it differs. */

function preloadImages() {
  var files = [
    "Images/Logo2.jpg",
    "Images/Fullsize/full1.jpg",
    "Images/Fullsize/full2.jpg",
    "Images/Fullsize/full3.jpg"
  ];
  window.preloaded = [];
  for (var i = 0; i < files.length; i++) {
    var img = new Image();
    img.src = files[i];
    window.preloaded.push(img);
  }
}

/* Logo rollover */
function logoOver() {
  document.getElementById("logo").src = "Images/Logo2.jpg";
}
function logoOut() {
  document.getElementById("logo").src = "Images/Logo.jpg";
}

/* Thumbnail image swap */
function swapImage(src, altText) {
  var big = document.getElementById("fullsize");
  big.src = src;
  big.alt = altText;
}
