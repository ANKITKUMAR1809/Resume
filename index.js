console.log("java is working");

function showLeft(){
    const elem= document.getElementById("left");
    elem.style.transition="3s";
    elem.style.width="100%";
}

function showRight(){
    const elem= document.getElementById("right");
    const elem1= document.getElementById("rpro");
    const elem2= document.getElementById("leftRight");
    elem.style.transition="2s";
    elem1.style.display="block"
    elem.style.width="100%";
    elem2.style.width="50%";
    elem2.style.width="50%";
    elem2.style.display="block";
}

function showMain(){
    const elem= document.getElementById("right");
    const elem1= document.getElementById("rpro");
    const elem2= document.getElementById("leftRight");
    elem.style.transition="2s";
    elem1.style.display="none"
    elem.style.width="0px";
    elem2.style.width="0px";
    elem2.style.width="0px";
    elem2.style.display="none";
}