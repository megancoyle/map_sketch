// use jquery to detect when drawing page is loaded
$(".drawings.new").ready(function() {
  var canvas,
    ctx,
    bMouseIsDown = false,
    iLastX,
    iLastY;
  canvas = document.getElementById("cvs");
  ctx = canvas.getContext("2d");

  var img = new Image();
  img.setAttribute("crossOrigin", "anonymous");

  img.onload = function() {
    ctx.drawImage(img, 0, 0);
  };

  img.src = window.mapImgUrl;

  // initial stroke width
  var strokeWidth = 2;

  canvas.onmousedown = function(e) {
    bMouseIsDown = true;
    iLastX =
      e.clientX -
      canvas.offsetLeft +
      (window.pageXOffset ||
        document.body.scrollLeft ||
        document.documentElement.scrollLeft);
    iLastY =
      e.clientY -
      canvas.offsetTop +
      (window.pageYOffset ||
        document.body.scrollTop ||
        document.documentElement.scrollTop);
  };

  canvas.onmouseup = function() {
    bMouseIsDown = false;
    iLastX = -1;
    iLastY = -1;
  };

  canvas.onmousemove = function(e) {
    if (bMouseIsDown) {
      var iX =
        e.clientX -
        canvas.offsetLeft +
        (window.pageXOffset ||
          document.body.scrollLeft ||
          document.documentElement.scrollLeft);
      var iY =
        e.clientY -
        canvas.offsetTop +
        (window.pageYOffset ||
          document.body.scrollTop ||
          document.documentElement.scrollTop);
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.lineWidth = strokeWidth;
      ctx.strokeStyle = strokeColor;

      if (mode == "pen") {
        ctx.globalCompositeOperation = "source-over";
        ctx.moveTo(iLastX, iLastY);
        ctx.lineTo(iX, iY);
        ctx.stroke();
      } else {
        // logic for eraser
        ctx.globalCompositeOperation = "destination-out";
        ctx.arc(iLastX, iLastY, 5, 0, Math.PI * 2, false);
        ctx.fill();
      }

      iLastX = iX;
      iLastY = iY;
    }
  };

  // set default mode
  var mode = "pen";

  var jsColor = document.getElementsByClassName("jscolor");
  for (var i = 0; i < jsColor.length; i++) {
    mode = "pen";
  }

  document.getElementById("color").addEventListener("click", function(e) {
    e.preventDefault();
  });

  // clear drawing
  document.getElementById("clear").addEventListener("click", function(e) {
    e.preventDefault();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
    img.src = window.mapImgUrl;
  });

  // changing the stroke width
  var strokeControls = document.getElementById("stroke-width");
  strokeControls.addEventListener("input", function() {
    strokeWidth = strokeControls.value;
  });

  // changing the stroke color
  var strokeColor = "#" + document.getElementById("color_value").value;
  var colorPicker = document.getElementById("color_value");

  document.getElementById("color_value").addEventListener("change", function() {
    strokeColor = "#" + this.value;
  });

  // use base64 and store value to input to save image to database
  document
    .getElementById("create-drawing")
    .addEventListener("click", function() {
      var dataUrl = canvas.toDataURL("image/jpeg");
      var dataImg = document.createElement("img");
      dataImg.src = dataUrl;
      var drawingField = document.createElement("div");
      drawingField.innerHTML =
        "<input type='hidden' name='drawing[image]' id='image' value='" +
        dataImg.src +
        "'>";
      document.getElementById("drawing_image").value = dataUrl;
    });
});
