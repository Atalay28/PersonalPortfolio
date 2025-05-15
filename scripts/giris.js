document.addEventListener("DOMContentLoaded", function () {
    var moreAboutMeButton = document.querySelector(".button button");
  
    moreAboutMeButton.addEventListener("click", function () {
      var about2Section = document.querySelector("#about2");
      about2Section.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function(){
    var chessbutton=document.getElementById("chessmatch");
    chessbutton.addEventListener("click",function(){
        window.location.href="https://www.youtube.com/watch?v=-AH7bw_5zPo";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var moreAboutMeButton = document.querySelector(".about4 .button button");
  
    moreAboutMeButton.addEventListener("click", function () {
      window.location.href =
        "https://youtu.be/PCiWTRg-itY";
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var sakaryaButton = document.getElementById("sakaryaUniButton");
    sakaryaButton.addEventListener("click", function () {
      window.location.href = "https://www.sakarya.edu.tr/";
    });
  });