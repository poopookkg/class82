var mouseEvent = "";
var last_position_of_x,last_position_of_y;

canvas=document.getElementById("canbutt");
ctx=canvas.getContext("2d");

color="black";
backgroundcolor="white";
widthoftheline=1;

canvas.addEventListener("mousedown",mousydown);

function mousy(e)
{
    color=document.getElementById("color").value;
    widthoftheline=document.getElementById("width").value;
    backgroundcolor=document.getElementById("backgroundcolor").value;
    document.getElementById("canbutt").style.color=backgroundcolor;
    mouseEvent="mouseDown";
}
canvas.addEventListner("mousedown",mousymove);
function mousymove(e)
{
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;
    if(mouseEvent=="mouseDown")
    {
        ctx.beginPath
    }
}
