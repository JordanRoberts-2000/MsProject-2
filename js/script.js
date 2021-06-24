// ---------- Functions --------
function current(){
  if(localStorage.getItem("fontSelect") == "Pangolin"){
    $(".Pangolin").html("Pangolin(current)");
    $(".Kirang").html("Kirang Haerang");
    $(".Helvetica").html("Helvetica");
  }else if(localStorage.getItem("fontSelect") == "Kirang Haerang"){
    $(".Pangolin").html("Pangolin");
    $(".Kirang").html("Kirang Haerang(current)");
    $(".Helvetica").html("Helvetica");
  }else if(localStorage.getItem("fontSelect") == "Helvetica"){
    $(".Pangolin").html("Pangolin");
    $(".Kirang").html("Kirang Haerang");
    $(".Helvetica").html("Helvetica(current)");
  }};
$(".navigation").on("mouseleave", function() {
    $(".settingsMenu").removeClass("active");
    $(".settings").css("font-size", "100%");
    $(".settings").css("color", "black");
  });
  $(".settings").on("mouseover", function() {
    $(".settingsMenu").addClass("active");
    $(".settings").css("font-size", "120%");
    $(".settings").css("color", "darkgreen");
  });
  $(".on").on("click", function() {
    localStorage.setItem("on", "rgba(0, 0, 0, 0.349)");
    $("body").css("background-color", (localStorage.getItem("on")));
  });
  $(".off").on("click", function() {
    localStorage.setItem("on", "rgb(238, 236, 236)");
    $("body").css("background-color", (localStorage.getItem("on")));
  });
  $(".fontSize").on("input change", function() {
    localStorage.setItem("fontSize",$(this).val());
    console.log($(this).val());
    $("body").css("font-size", ($(this).val())/10 + "em");
    console.log(localStorage.getItem("fontSize"));
  });