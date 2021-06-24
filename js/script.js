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

// -- SignUp -- //
$(document).ready(function(){
  // -- SignUp, Username --
    $(".enter").on("click", function() {
      let entry = 0
      if($(".input1").val().length == 0){
        $(".successGuideU").css("opacity", 1);
        $(".successGuideU").css("color", "red")
        $(".successGuideU").html("Username Required");
      }else if($(".input1").val().length != 0 && $(".input1").val().length <=6){
        $(".successGuideU").css("opacity", 1);
        $(".successGuideU").css("color", "red")
        $(".successGuideU").html("Too Short");
      }else if($(".input1").val().length >= 14){
        $(".successGuideU").css("opacity", 1);
          $(".successGuideU").css("color", "red")
          $(".successGuideU").html("Too Long");
      }else{
        $(".successGuideU").css("opacity", 1);
        $(".successGuideU").css("color", "green");
        $(".successGuideU").html("Username Accepted");
        localStorage.setItem("username",$(".input1").val())
        entry++;
      };
      // --Sign Up, email --
      let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //not my code:https://www.youtube.com/watch?v=HzJngc-Se9Q
      if(($(".input2").val().match(pattern))){
        $(".successGuideE").css("opacity", 1);
        $(".successGuideE").css("color", "green");
        $(".successGuideE").html("Email Accepted");
        entry++;
      }else{
        $(".successGuideE").css("opacity", 1);
        $(".successGuideE").css("color", "red");
        $(".successGuideE").html("Email Not Accepted");
      };
      // --Sign Up, password --
      if($(".input3").val().length == 0){
        $(".successGuideP").css("opacity", 1);
        $(".successGuideP").css("color", "red");
        $(".successGuideP").html("Password Required");
      }else{
        $(".successGuideP").css("opacity", 1);
        $(".successGuideP").css("color", "green");
        $(".successGuideP").html("Password Accepted");
        entry++;
        localStorage.setItem("password",$(".input3").val())
      };
      if(entry == 3){
        $(".Pcontainer").addClass("hide");
        loggedIn();
      };
    });
  });

// -- Sign In --
    $(document).ready(function(){
      $(".signInE").on("click", function() {
        let entry2 = 0;
        if($(".signInU").val() == localStorage.getItem("username")){
          $(".signInError1").css("opacity", 1);
          $(".signInError1").css("color", "green");
          $(".signInError1").html("Username Recognized");
          entry2++;
        }else{
          $(".signInError1").css("opacity", 1);
          $(".signInError1").css("color", "red");
          $(".signInError1").html("Username Not Recognized");
        };
        if($(".signInP").val() == localStorage.getItem("password")){
          entry2++;
        }else{
          if($(".signInU").val() == localStorage.getItem("username")){
            $(".signInError2").css("opacity", 1);
            $(".signInError2").css("color", "red");
            $(".signInError2").html("Password Incorrect");
          };
        };
        if(entry2 == 2){
          console.log("registered");
          loggedIn();
          $(".Pcontainer2").addClass("hide");
        };
      });
    });

//Sign /Up
$(document).ready(function(){
  $(".PsignUp").on("click", function() {
    $(".Pcontainer").removeClass("hide");
  });
  $(".close").on("click", function() {
    $(".Pcontainer").addClass("hide");
  });
});
//sign in 
$(document).ready(function(){
  $(".PsignIn").on("click", function() {
    $(".Pcontainer2").removeClass("hide");
  });
});
$(document).ready(function(){
  $(".close").on("click", function() {
    $(".Pcontainer2").addClass("hide");
  });
});

$(document).ready(function(){
  $(".settings").on("mouseover", function() {
    $(".settingsMenu").addClass("active");
  });
});
