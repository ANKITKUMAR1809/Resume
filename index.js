console.log("java is working");

function showLeft(){
    const elem= document.getElementById("left");
    elem.style.transition="3s";
    elem.style.width="100%";
    // resume 1
    const resume1=document.getElementById("resume1")
    resume1.style.display="inline-block";
    const lefth1=document.getElementById("lefth1");
    lefth1.style.display="block";
    const leftflex=document.getElementById("leftflex");
    leftflex.style.display="flex";
    const leftp=document.getElementById("leftp");
    leftp.style.display="block";
}

function showRight(){
    const elem= document.getElementById("right");
    const elem1= document.getElementById("rpro");
    const elem2= document.getElementById("leftRight");
    const upright= document.getElementById("upright");
    const icon=document.getElementById("icon");
    icon.style.display="inline-block";
    elem.style.transition="2s";
    elem1.style.display="block"
    elem.style.width="100%";
    elem2.style.width="100%";
    elem2.style.display="flex";
    upright.style.display="inline-block";

}

function showMain(){
    const elem= document.getElementById("right");
    const elem1= document.getElementById("rpro");
    const elem2= document.getElementById("leftRight");
    const upright= document.getElementById("upright");
    const icon=document.getElementById("icon");
    elem.style.transition="2s ease-in";
    elem.style.width="0px";
    elem1.style.display="none"
    elem2.style.width="0px";
    elem2.style.display="none";
    upright.style.display="none";
    icon.style.display="none";
}
function showMain1(){
    const elem= document.getElementById("left");
    elem.style.transition="2s";
    elem.style.width="0px";
    const resume1=document.getElementById("resume1")
    resume1.style.display="none";
    // lefth1
    const lefth1=document.getElementById("lefth1");
    lefth1.style.display="none";
    const leftflex=document.getElementById("leftflex");
    leftflex.style.display="none";
    const leftp=document.getElementById("leftp");
    leftp.style.display="none";

}
// 
// 
// 
// this is for only typewriter animation
// 
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    // css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid black}";
    document.body.appendChild(css);
};
// span on click disappear
function disappear(){
    const msg=document.getElementById("bottom");
    bottom.style.display="none";
}
setTimeout(()=>{
    const msg=document.getElementById("bottom")
    bottom.style.display="inline-block";
},1400)