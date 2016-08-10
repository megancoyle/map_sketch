$(".drawings.new").ready(function() {
  var canvas, ctx, bMouseIsDown = false, iLastX, iLastY
      canvas = document.getElementById('cvs');
      ctx = canvas.getContext('2d');

    var img = new Image;
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
            ctx.moveTo(iLastX, iLastY);
            ctx.lineTo(iX, iY);
            ctx.stroke();
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

    // document.getElementById('create-drawing').addEventListener('mouseover', function(){
    //   var dataImage = window.btoa(img);
    //   console.log(dataImage);
    //   var imageFromData = window.atob(dataImage);
    //   console.log(imageFromData)
    //   document.getElementById('new-image').innerHTML = '<img src=' + imageFromData + '>';
    // });


    // document.getElementById('create-drawing').addEventListener('mouseover', function(){
    //         var dataUrl = canvas.toDataURL();
    //         console.log(dataUrl);
    // });
});
