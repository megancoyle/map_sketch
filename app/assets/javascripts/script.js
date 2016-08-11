$(".drawings.new").ready(function() {
  var canvas, ctx, bMouseIsDown = false, iLastX, iLastY
      canvas = document.getElementById('cvs');
      ctx = canvas.getContext('2d');

    var img = new Image;
    img.setAttribute('crossOrigin', 'anonymous');
    img.onload = function(){
     ctx.drawImage(img,0,0);
    };
    img.src = window.mapImgUrl;

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
            ctx.beginPath();
            ctx.moveTo(iLastX, iLastY);
            ctx.lineTo(iX, iY);
            ctx.stroke();
            ctx.lineWidth=2;
            ctx.strokeStyle = strokeColor;
            iLastX = iX;
            iLastY = iY;
        }
    };

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
