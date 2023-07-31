console.log("java is working");

function showLeft(){
    const elem= document.getElementById("left");
    elem.style.transition="3s";
    elem.style.width="100%";
};

function showRight(){
    const elem= document.getElementById("right");
    const elem1= document.getElementById("rpro");
    elem.style.transition="3s";
    elem1.style.display="block"
    elem.style.width="100%";
};