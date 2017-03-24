function showEffects(){
$("body").hide(0,showBody);
}
function showBody(){
  $("body").fadeIn(5000);
}


// Effects
window.addEventListener("load",showEffects);
