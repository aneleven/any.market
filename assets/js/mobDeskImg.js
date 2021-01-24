$(document).ready(function() {

  if (window.innerWidth <= 799.98){
    document.getElementById("pr1").children[0].src = "./assets/image/1.png";
    document.getElementById("pr2").children[0].src = "./assets/image/2.png";
    document.getElementById("pr3").children[0].src = "./assets/image/3.png";
  }else{
    document.getElementById("pr1").children[0].src = "./assets/image/1@2x.png";
    document.getElementById("pr2").children[0].src = "./assets/image/2@2x.png";
    document.getElementById("pr3").children[0].src = "./assets/image/3@2x.png";
  }  

});