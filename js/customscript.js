$(document).ready(function() {
  $("#button").click(function() {
    var elem = $("#button").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#button").text("Read Less");
      $("#text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#button").text("Read More");
      $("#text").slideUp();
    }
  });
});