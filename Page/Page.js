
// TOPBAR

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("TopMenu");
var pane = document.getElementById("ContentPane");

// Get the offset position of the navbar
var sticky = header.offsetTop + pane.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

// Open booking emails
function email() {
  var type = 'Type of function: ';
  var num = 'Number of people: ';
  var date = 'Date and time: ';
  var venue = 'Venue: ';
  var email = type + '%0D%0A' + num + '%0D%0A' + date + '%0D%0A' + venue;
  window.open('mailto:info@auldspice.com?subject=Band Booking&body=' + email);
};
