$(document).ready(function() {
  /* Desktop Menu Treatment */
  var profile = $("#profile");
  var dropdownContent = $(".dropdown-content");

  profile.click(function() {
    dropdownContent.toggle();
  });

  $(document).on("click", function(event) {
    var trigger = profile[0];
    var dropdown = dropdownContent;
    if (
      dropdown !== event.target &&
      !dropdown.has(event.target).length &&
      trigger !== event.target
    ) {
      dropdownContent.hide();
    }
  });

  /* Mobile Dropdown */
  var isDropdownOpen = false;
  $(".mobile-menu").hide();
  hideDiv();

  function hideDropdown() {
    $(".mobile-menu").css("display", "none");
    isDropdownOpen = false;
    $(".mobile-menu").fadeOut();
  }
  function showDropdown() {
    $(".mobile-menu").css("display", "block");
    isDropdownOpen = true;
  }
  function toggleDropdown(e) {
    e.preventDefault();
    if (isDropdownOpen) {
      hideDropdown();
    } else {
      showDropdown();
    }
  }
  function hideDiv() {
    if ($(window).width() > 610) {
      hideDropdown();
    }
  }

  $(".mobile-icon").click(toggleDropdown);
  $(".mobile-icon").click(function(e) {
    e.preventDefault();
  });
  $(window).resize(function() {
    hideDiv();
  });
});
