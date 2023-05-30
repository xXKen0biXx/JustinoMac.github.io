$(document).ready(function() {
  // preload images
  $("#image_list a").each(function() {
    var swappedImage = new Image();
    swappedImage.src = $(this).attr("href");
  });

  // set up event handlers for links
  $("#image_list a").click(function(evt) {
    evt.preventDefault();

    var imageURL = $(this).attr("href");
    var caption = $(this).attr("title");

    // Fade out current caption and image
    $("#caption, #image").fadeOut(1000, function() {
      // Update caption and image source
      $("#image").attr("src", imageURL);
      $("#caption").text(caption);

      // Fade in new caption and image
      $("#caption, #image").fadeIn(1000);
    });
  }); // end click

  // move focus to first thumbnail
  $("li:first-child a").focus();
}); // end ready