$(document).ready(function() {
  if ($(".get_address").length) {
    $("form").on("submit", function() {
      var address = $("#address");
      if (address.val() == "") {
        address.addClass("form-warning");
        return false;
      } else {
        address.removeClass("form-warning");
      }
    });
  }

  if ($(".new_drawing").length) {
    $("form").on("submit", function() {
      var drawingTitle = $("#drawing_title");
      if (drawingTitle.val() == "") {
        drawingTitle.addClass("form-warning");
        return false;
      } else {
        drawingTitle.removeClass("form-warning");
      }
    });
  }
});
