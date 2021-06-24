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
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
 // ---------- Blog Page ----------
  // -- Blog page, Button 1 --
  $("#blogButton0").on("click", function() {
    time = 5000000000;
    $("#blogDefault").addClass("hide");
    $("#article1").removeClass("hide");
    $("#blog img").addClass("hide");
    $("#blogImg5").removeClass("hide");
    $("#selectedTitle").html(blogTitle[0]);
    $("#selectedTitle").removeClass("hide");
    $("#movingTitle").css("z-index", -2);
    setTimeout(function () {
      $("#blog span").css("background-color", "");
    $("#blogButton0").css("background-color", "rgba(173, 216, 230, 0.7)");
    }, 1600);
  });
  // -- Blog page, Button 2 --
  $("#blogButton1").on("click", function() {
    time = 5000000000;
    $("#blogDefault").addClass("hide");
    $("#article2").removeClass("hide");
    $("#blog img").addClass("hide");
    $("#blogImg6").removeClass("hide");
    $("#selectedTitle").html(blogTitle[1]);
    $("#selectedTitle").removeClass("hide");
    $("#movingTitle").css("z-index", -2);
    setTimeout(function () {
      $("#blog span").css("background-color", "");
    $("#blogButton1").css("background-color", "rgba(173, 216, 230, 0.7)");
    }, 1600);
  });
  // -- Blog page, Button 3 --
  $("#blogButton2").on("click", function() {
    time = 5000000000;
    $("#blogDefault").addClass("hide");
    $("#article3").removeClass("hide");
    $("#blog img").addClass("hide");
    $("#blogImg7").removeClass("hide");
    $("#selectedTitle").html(blogTitle[2]);
    $("#selectedTitle").removeClass("hide");
    $("#movingTitle").css("z-index", -2);
    setTimeout(function () {
      $("#blog span").css("background-color", "");
    $("#blogButton2").css("background-color", "rgba(173, 216, 230, 0.7)");
    }, 1600);
  });
  // -- Blog page, Button 4 --
  $("#blogButton3").on("click", function() {
    time = 5000000000;
    $("#blogDefault").addClass("hide");
    $("#article4").removeClass("hide");
    $("#blog img").addClass("hide");
    $("#blogImg8").removeClass("hide");
    $("#selectedTitle").html(blogTitle[3]);
    $("#selectedTitle").removeClass("hide");
    $("#movingTitle").css("z-index", -2);
    setTimeout(function () {
      $("#blog span").css("background-color", "");
    $("#blogButton3").css("background-color", "rgba(173, 216, 230, 0.7)");
    }, 1600);
  });