function menuFunc() {
    var list_menu = document.getElementById("list_menu");
      if (list_menu.style.display === "block") {
        list_menu.style.display = "none";
        
      } else {
        list_menu.style.display = "block";
  
      }
  }


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if ( window.scroll > 60.00000000000000 || document.documentElement.scrollTop > 60.00000000000000) {
  document.getElementById("logo_icon").style.width = "60px";
  
  document.getElementById("icon_btn").style.fontSize = "40px";
  document.getElementById("icon_btn").style.margin = "2px";

} else {
  
  document.getElementById("logo_icon").style.width = "100px";
  
  document.getElementById("icon_btn").style.fontSize = "60px";
  document.getElementById("icon_btn").style.margin = "4.15px";


  }
}
