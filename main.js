var mouseEvent = "empty";
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

color = "empty";
width = "empty";

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown (e) {
    color= document.getElementById("color").value;
    width= document.getElementById("width").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup (e) {
    color= document.getElementById("color").value;
    width= document.getElementById("width").value;
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave (e) {
    color= document.getElementById("color").value;
    width= document.getElementById("width").value;
    mouseEvent = "mouseleave";
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart (e) {
    last_position_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove () {
    current_position_x = e.clientX - canvas.offsetLeft;
    current_position_y = e.clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(last_position_x, last_position_y);
    ctx.lineTo(current_position_x, current_position_y);
    ctx.stroke();
    
    last_position_x = current_position_x;
    last_position_y = current_position_y;
}


canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove (e) {
    current_position_x = e.clientX - canvas.offsetLeft;
    current_position_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_position_x, last_position_y);
        ctx.lineTo(current_position_x, current_position_y);
        ctx.stroke();
    }

    last_position_x = current_position_x;
    last_position_y = current_position_y;
}