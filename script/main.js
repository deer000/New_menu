var slides=document.querySelector(".slide_box");
var count=0;
function get(){
	if(count ==33){
		count=0;
	}else {
		count++;
	}
	slides.style.left=976*(-count)+"px";
}
window.setInterval("get()", 3000);