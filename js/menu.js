function menuFunc() {
    var list_menu = document.getElementById("list_menu");
      if (list_menu.style.display === "block") {
        list_menu.style.display = "none";
        
      } else {
        list_menu.style.display = "block";
  
      }
  }

function menuClose() {
  var list_menu = document.getElementById("list_menu");
    if (list_menu.style.display === "block") {
      list_menu.style.display = "none";
      
    }
}


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if ( window.scroll > 60.00000000000000 || document.documentElement.scrollTop > 60.00000000000000) {
  document.getElementById("logo_icon").style.width = "60px";
  
  document.getElementById("icon_btn").style.fontSize = "40px";
  document.getElementById("icon_btn").style.margin = "2px";
  document.getElementById("tx-whats-mobile").style.fontSize = "0px";
  document.getElementById("icon-whats").style.marginRight = "0px";

} else {
  
  document.getElementById("logo_icon").style.width = "100px";
  
  document.getElementById("icon_btn").style.fontSize = "60px";
  document.getElementById("icon_btn").style.margin = "4.15px";
  document.getElementById("tx-whats-mobile").style.fontSize = "20px";
  document.getElementById("icon-whats").style.marginRight = "10px";

  }
}
