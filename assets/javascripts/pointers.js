window.onresize=function(){
var d = document.getElementById('ziegler-1');
var startWidth=1440;
var windowWidth=window.innerWidth
startx=d.offsetLeft;
newx=Math.floor((windowWidth/startWidth)*startx);
d.style.left=newx + "px";
}