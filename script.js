alert("you can put the red rectangle in the center by clicking on the button");
function centerize() {
    document.getElementById("child").style.left = 'calc(300px - 30px)';
    document.getElementById("child").style.top = 'calc(300px - 30px)';
}