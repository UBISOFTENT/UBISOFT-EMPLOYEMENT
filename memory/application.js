$(document).ready(function(){
  event.preventDefault();
  var click_count = 0;
  var first_guess = 0;
  var second_guess = 0;
  $(".card").on("click", function() {
    $(this).find("p").css("opacity", 1);
    $(this).find("p").addClass("clicked");
    $("#guess").html($(this).find("p").text());
    if (click_count == 0) {
      click_count = 1;
      first_guess = $(this).find("p").text();
    }
    else {
      click_count = 0
      second_guess = $(this).find("p").text();
      if (first_guess != second_guess){
        $(".clicked").css("opacity", 0);
        $(".clicked").removeClass("clicked");
        };
      };
    });
  $("#clear").on("click", function() {
    $(".card p").css("opacity", 0);
  });
});
