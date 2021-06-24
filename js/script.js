// ---------- Variables ----------
var i = 0;
var blogButtonCounter = 0;
var blogImg = ["blogArtical1.jpg","blogArtical2.jpg","blogArtical3.jpg","blogArtical4.jpg"];
var blogTitle = ["The Importance of Robots in the Workplace","Artificial Intelligence","The fun possible with Robotics","Gonna miss you"]
var time = 1500;
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
function mathCheck(a){
  if($("#mathAnswer").val() == a){
    $("#careersMessage").removeClass("hide");
    $("#careersMessage p").html("Congrats!<br>You answered correctly<br>We'll Email you an application in the coming days")
    setTimeout(function () {
      $("#careersMessage").addClass("hide");
      $("#careersPopup").addClass("hide");
    }, 3000);
    }else{
    $("#careersMessage").removeClass("hide");
    $("#careersMessage p").html("Sorry<br>You answered incorrectly<br>Basic arithmetic is required for this position")
    setTimeout(function () {
      $("#careersMessage").addClass("hide");
      $("#careersPopup").addClass("hide");
    }, 3000);
  };
};
function loggedIn(){
  localStorage.setItem("login", 1);
  $(".profile p").html(localStorage.getItem("username"));
  $(".PsignUp").addClass("hide");
  $(".PsignIn").addClass("hide");
  $(".logOut").removeClass("hide");
};
function loggedOut(){
  localStorage.setItem("login", 0);
  $(".profile p").html("Profile");
  $(".PsignUp").removeClass("hide");
  $(".PsignIn").removeClass("hide");
  $(".logOut").addClass("hide");
};
function blogImgMove(){
  $("#movingTitle").html(blogTitle[i]);
  $("#blogButton"+(blogButtonCounter-1)).css("background-color", "");
  $("#blogButton"+i).css("background-color", "rgba(173, 216, 230, 0.7)");
  $("#blogButton"+i).css("transition", ".5s");
  $("#blogImg"+(i+1)).removeClass("hide");
  $("#blogImg"+(i)).addClass("hide");
	if(i < blogImg.length - 1){
    if(i == 0){;
      $("#blogImg"+(4)).addClass("hide");
      $("#blogButton3").css("background-color", "");
      $("#blogButton"+i).css("transition", ".5s");
    };
	  i++; 
    blogButtonCounter++;
	} else { 
    $("#blogButton"+(blogButtonCounter-1)).css("background-color", "");
    blogButtonCounter = 0;
		i = 0;
	}
	setTimeout("blogImgMove()", time);
};
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
// ---------- Let Pages Load ----------
$(document).ready(function(){
  // ---------- Navbar ----------
  // -- Navbar, Profile --
  $(".logOut").on("click", function() {
    loggedOut();
  });
  if(localStorage.getItem("login") == 1){
    loggedIn();
  };
  // -- Navbar, Settings --
  $("body").css("font-family", localStorage.getItem("fontSelect"));
  current();
  $(".fonts").on('change', function() {
    localStorage.setItem("fontSelect", $(this).val());
    current();
    $("body").css("font-family", (localStorage.getItem("fontSelect")));
  });
  $("body").css("font-size",(parseInt((localStorage.getItem("fontSize")))/10) + "em");
  $("body").css("background-color", (localStorage.getItem("on")));
  $(".navigation").on("mouseleave", function() {
    $(".settingsMenu").removeClass("active");
    $(".settings").css("font-size", "100%");
    $(".settings").css("color", "black");
  });
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
  // ---------- Shop Page ----------
  // -- Shop Page, Mouse-hover --
  $("#shop h1").on("mouseover", function() {
    // opacity used instead of class hide, causes error
    if($(this).hasClass("noStock")){
      console.log("wsoot");
      $(this).css("opacity", "0.6");
      $(this).css("font-size", "2.2em");
      $(this).css("color", "red");
      $(this).css("border-color", "red");
      $(this).html("Out of Stock");
    }else{
      $(this).css("opacity", "0.6");
      $(this).css("font-size", "2.2em");
    };
  });
  // -- Shop Page, Mouse-leave
  $("#shop h1").on("mouseleave", function() {
    $(this).css("opacity", "0");
    $(this).css("font-size", "2em");
  });
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
  $("#blogButton1").on("click", function() {
    time = 5000000000
    $("#blog img").addClass("hide");
    $("#blogImg6").removeClass("hide");
  });
  $("#blogButton2").on("click", function() {
    time = 5000000000
    $("#blog img").addClass("hide");
    $("#blogImg7").removeClass("hide");
  });
  $("#blogButton3").on("click", function() {
    time = 5000000000
    $("#blog img").addClass("hide");
    $("#blogImg8").removeClass("hide");
  });
  // -- Blog Page, Call Function
  blogImgMove();
  // ---------- Careers Page ----------
  // -- Careers Page, Button Click
  $("#careersButton1").on("click", function() {
    $("#careersButton1").html("No Positions Available");
    $("#careersButton1").css("font-size", ".7em");
    $("#careersButton1").css("color", "red");
  });
  // -- Careers Math Question --
  $("#careersButton2").on("click", function() {
    $("#careersPopup").removeClass("hide");
    $("#careersPopup").css("width", "60vw");
    let randomOperator = Math.floor(Math.random()*4);
    let = randomNumber1 = Math.floor(Math.random()*20)+1;
    let = randomNumber2 = Math.floor(Math.random()*20)+1;
    if(randomOperator == 0){
      $("#careersPopup h2").html(randomNumber1+"+"+randomNumber2);
      let answer = randomNumber1 + randomNumber2;
  $("#careersPopupButtonEnter").on("click", function() {
    mathCheck(answer);
  });
}else if(randomOperator == 1){
  $("#careersPopup h2").html(randomNumber1+"-"+randomNumber2);
  let answer = randomNumber1 - randomNumber2;
  $("#careersPopupButtonEnter").on("click", function() {
    mathCheck(answer);
  });
}else if(randomOperator == 2){
  $("#careersPopup h2").html(randomNumber1+"x"+randomNumber2);
  let answer = randomNumber1 * randomNumber2;
  $("#careersPopupButtonEnter").on("click", function() {
    mathCheck(answer);
  });
}else{
  $("#careersPopup h2").html((randomNumber1*randomNumber2)+"/"+randomNumber2);
  let answer = (randomNumber1*randomNumber2) / randomNumber2;
  $("#careersPopupButtonEnter").on("click", function() {
    mathCheck(answer);
  });
};
});
  });
  $("#careersButton3").on("click", function() {
    $("#careersButton3").html("No Positions Available");
    $("#careersButton3").css("font-size", ".7em");
    $("#careersButton3").css("color", "red");
  });
  // -- Careers Page, Button Close --
  $("#careersPopupButtonClose").on("click", function() {
    $("#careersPopup").addClass("hide");
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
      let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //this line was copied code:https://www.youtube.com/watch?v=HzJngc-Se9Q
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
   