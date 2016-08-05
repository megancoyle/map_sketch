var canvas, ctx, bMouseIsDown = false, iLastX, iLastY,
        $save, $imgs,
        $convert, $imgW, $imgH,
        $sel;

    function init () {
        canvas = document.getElementById('cvs');
        ctx = canvas.getContext('2d');
        $save = document.getElementById('save');
        $convert = document.getElementById('convert');
        $sel = document.getElementById('sel');
        $imgs = document.getElementById('imgs');
        $imgW = document.getElementById('imgW');
        $imgH = document.getElementById('imgH');
        bind();
    }
    function bind () {
        var completeDrawing = []
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
                console.log(this.value);
                });

        console.log(strokeColor);

        $save.onclick = function (e) {
            var type = $sel.value,
                w = $imgW.value,
                h = $imgH.value;
            Canvas2Image.saveAsImage(canvas, w, h, type);
        }
        $convert.onclick = function (e) {
            var type = $sel.value,
                w = $imgW.value,
                h = $imgH.value;
            $imgs.appendChild(Canvas2Image.convertToImage(canvas, w, h, type))
        }

    }

    onload = init;
