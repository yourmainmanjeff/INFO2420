/* External JavaScript for Home.html
   Replace/merge with the head code from your Project 6 Graphics.html if it differs. */

function preloadImages() {
  var files = [
    "Images/Logo2.jpg",
    "Honeymoon/CoupleBike2Lg.jpg",
    "Honeymoon/CoupleCampingLg.jpg",
    "Honeymoon/CoupleSnowBoardLg.jpg"
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
  document.getElementById("logo").src = "images/Logo.png";
}
function logoOut() {
  document.getElementById("logo").src = "images/Logo1.png";
}

/* Thumbnail image swap */
function swapImage(src, altText) {
  var big = document.getElementById("fullsize");
  big.src = src;
  big.alt = altText;
}
