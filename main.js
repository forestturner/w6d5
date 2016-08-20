const Router = require("./router.js");

document.addEventListener("DOMContentLoaded",function(){
  let content = document.querySelector(".content");
  let router = new Router(content);
  router.start();

  let sidebar = document.getElementsByClassName("sidebar-nav");
  let sideLinks = sidebar[0].getElementsByTagName("li");
  // debugger
  for (var i = 0; i < sideLinks.length; i++) {
    sideLinks[i].addEventListener("click",(eve)=>{

      let string = (eve["srcElement"]["innerHTML"]);
      window.location.hash = string.toLowerCase();
      console.log(window.location.hash);
    });
  }
});
