function showEffects(){
$("body").hide(0,showNav);
}
function showNav(){
  $("body").slideDown(10000);
}

// Effects
window.addEventListener("load",showEffects);
