function showEffects(){
$("body").hide(0,showNav);
}
function showNav(){
  $("#navDemo").fadeIn(5000,showContainer);
}
 function showContainer(){
   $(".w3-container").slideDown(5000,showContent);
 }
 function showContent(){
   $(".w3-content").slideDown(5000,showBody);
 }
 function showBody(){
   $("body").slideDown(5000);
 }
// Effects
window.addEventListener("load",showEffects);
