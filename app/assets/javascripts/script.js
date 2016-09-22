$(".drawings.new").ready(function() {
  // i was curious why you opted to do some of the code in jquery but some of the code in vanilla
  var canvas, ctx, bMouseIsDown = false, iLastX, iLastY
      canvas = document.getElementById('cvs');
      ctx = canvas.getContext('2d');

    var img = new Image;
    img.setAttribute('crossOrigin', 'anonymous');
    img.onload = function(){
     ctx.drawImage(img,0,0);
    };
    img.src = window.mapImgUrl;

    // initial stroke width
    var strokeWidth = 2;

    canvas.onmousedown = function(e) {
        bMouseIsDown = true;
        iLastX = e.clientX - canvas.offsetLeft + (window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft);
        iLastY = e.clientY - canvas.offsetTop + (window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop);
    }
    canvas.onmouseup = function() {
        bMouseIsDown = false;
        iLastX = -1;
        iLastY = -1;
    }
    canvas.onmousemove = function(e) {
        if (bMouseIsDown) {
            var iX = e.clientX - canvas.offsetLeft + (window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft);
            var iY = e.clientY - canvas.offsetTop + (window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop);
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.lineWidth= strokeWidth;
            ctx.strokeStyle = strokeColor;

            if(mode=="pen") {
                ctx.globalCompositeOperation="source-over";
                ctx.moveTo(iLastX, iLastY);
                ctx.lineTo(iX, iY);
                ctx.stroke();
            } else {
              // logic for eraser
                ctx.globalCompositeOperation="destination-out";
                ctx.arc(iLastX, iLastY,5,0,Math.PI*2,false);
                ctx.fill();
            }

            iLastX = iX;
            iLastY = iY;
        }
    };

    var mode="pen";
    $(".jscolor").click(function(){ mode="pen"; });
    // trying to get eraser not to remove background image
    $("#eraser").click(function(e){
      e.preventDefault();
      canvas.style.backgroundImage = img.src;
      mode="eraser";
    });
    $("#color").click(function(e){
      e.preventDefault();
    });
    $("#clear").click(function(e){
      e.preventDefault();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img,0,0);
      img.src = window.mapImgUrl;
    });

    var strokeControls = document.getElementById('stroke-width');
    $("#stroke-width").on("input", function() {
      // cool! did not know what the `input` event was until now. I imagine this is what's changing the fatness of the ink
      strokeWidth = strokeControls.value;
    });

    var strokeColor = '#' + document.getElementById('color_value').value;
    var colorPicker = document.getElementById('color_value');

    document.getElementById('color_value').addEventListener('change',function(){
            strokeColor = '#' + this.value;
            });

    document.getElementById('create-drawing').addEventListener('click', function(){
            var dataUrl = canvas.toDataURL("image/jpeg");
            var dataImg = document.createElement('img');
            dataImg.src = dataUrl;
            var drawingField = document.createElement('div');
            drawingField.innerHTML = "<input type='hidden' name='drawing[image]' id='image' value='" + dataImg.src + "'>"
            document.getElementById('drawing_image').value = dataUrl;
          });

});
