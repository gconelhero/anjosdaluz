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
  document.getElementById("logo-menu").style.width = "10%";

  document.getElementById("logo-menu").style.transition = "all 0.3s ease";
  document.getElementById("icon_btn").style.fontSize = "40px";
  document.getElementById("icon_btn").style.margin = "2px";
  document.getElementById("tx-whats-mobile").style.fontSize = "0px";
  document.getElementById("icon-whats").style.marginRight = "0px";
  document.getElementById("tx-whats-mobile").style.transition = "all 0.5s ease";
  

} else {
  
  document.getElementById("logo-menu").style.width = "30%";
  
  document.getElementById("icon_btn").style.fontSize = "60px";
  document.getElementById("icon_btn").style.margin = "4.15px";
  document.getElementById("tx-whats-mobile").style.fontSize = "20px";
  document.getElementById("icon-whats").style.marginRight = "10px";

  }
}
