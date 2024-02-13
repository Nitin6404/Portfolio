function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


var typed = new Typed('#element', {
    strings: ['<i>C++</i> Developer', '&amp; Ful Stack Dev'],
    typeSpeed: 50,
  });