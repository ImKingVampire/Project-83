
var lastX,lastY,curX,curY;

canvas=document.getElementById("canvoos");
ctx=canvas.getContext("2d");

color="black";
lWidth=1;

newWidth=screen.width-96;
newHeight=screen.height-300;
if(screen.width<990){
    document.getElementById("canvoos").width=newWidth;
    document.getElementById("canvoos").height=newHeight;
}

    canvas.addEventListener("touchstart",my_touchstart);

    function my_touchstart (e){
        color=document.getElementById("tColor").value;
        lWidth=document.getElementById("lWidth").value;
        lastX=e.touches[0].clientX-canvas.offsetLeft;
        lastY=e.touches[0].clientY-canvas.offsetTop;
    }
    

    canvas.addEventListener("touchmove",my_touchmove);

    function my_touchmove (e){
        curX=e.touches[0].clientX-canvas.offsetLeft;
        curY=e.touches[0].clientY-canvas.offsetTop;
     
            ctx.beginPath();
            ctx.strokeStyle=color;
            ctx.lineWidth=lWidth;
            console.log("X Y Coordinates = ");
            console.log("LastX="+lastX+" LastY="+lastY+" CurrentX="+curX+" CurrentY="+curY);
            ctx.moveTo(lastX,lastY);
            ctx.lineTo(curX,curY);
            ctx.stroke();
      
        lastX=curX;
        lastY=curY;
    }
    function clearFF (){
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    }