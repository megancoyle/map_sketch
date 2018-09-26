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
});
