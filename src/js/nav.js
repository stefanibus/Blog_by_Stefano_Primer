// Stefano_Question:  'alpinejs' is defined but never used (see nav.js)
//import alpinejs from "alpinejs";

// finally! this import now  works successfully
// import jquery from "jquery"; 
// the Below JQUERY IMPORT DID NOT WORK
// import "@types/jquery/";

// Stefano_Question:  Unable to import Font-Awesome

jquery(document).ready(function () {
  // This message was  not  printed to the console for a long time
  //
  console.log(
    "jquery Document-Ready. jQuery is ready now  ;) "
  );

  function scrollToTop() {
   // console.log("scroll to top on Pageload please "); 
    setTimeout(() => jquery(window).scrollTop(0), 300);
  }
  scrollToTop();
});
// // Stefano_Question:  settimeout seems to be  needed for the Console to print the message! Suprize!
// setTimeout(() => console.log("file: nav.js was successfully added."), 10);

// NAV is comming  FROM https://codepen.io/taniarascia/pen/dYvvYv
// NAV-TUTORIAL here  http://www.taniarascia.com/responsive-dropdown-navigation-bar/

// NAVIGATION WITH JQuery
(function ($) {
  // Begin jQuery
  $(function () {
    // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").toggle();
      // Close one dropdown when selecting another
      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $("html").click(function () {
      $(".nav-dropdown").hide();
    });
    // Toggle open and close nav styles on click
    $("#nav-toggle").click(function () {
      $("nav ul").slideToggle();
    });
    // Hamburger to X toggle
    $("#nav-toggle").on("click", function () {
      this.classList.toggle("active");
    });
  }); // end DOM ready
})(jquery); // end jQuery
