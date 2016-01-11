$(document).ready(function() {
  
  var i = 0;
  var beeps = [];
  var beep_num = 0;
  var user_num = 0;
  var delay = 0;
  var strict = false;
  
  var audio1 = document.createElement("audio");
  audio1.src = "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";
  var audio2 = document.createElement("audio");
  audio2.src = "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";
  var audio3 = document.createElement("audio");
  audio3.src = "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3";
  var audio4 = document.createElement("audio");
  audio4.src = "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3";
  var audio5 = document.createElement("audio");
  audio5.src = "https://www.ezchx.com/projects/Wrong-answer-sound-effect.mp3";
  var audio6 = document.createElement("audio");
  audio6.src = "https://www.ezchx.com/projects/ta-da.mp3";
  
  $("#green").hide();
  $("#red").hide();
  $("#blue").hide();
  $("#yellow").hide();
  
  $(".start_button").on("click", function(){
    i = 1;
    beeps = [];
    beep_num = 0;
    user_num = 0;
    delay = 500;
    add_beep();
    play_beeps();    
  });
  
  $(".stop_button").on("click", function(){
    i = 1;
    beeps = [];
    beep_num = 0;
    user_num = 0;
    $(".display").html("");
  });
  
  $(".strict_button").on("click", function(){
    strict = true;
    $(".start_button").trigger("click");
  });
  
  $("#base").mousedown(function(e){
    if (i >= beeps.length && i != 0) {
      //delay = 500;
      user_num += 1;
      var x = (e.pageX);
      var y = (e.pageY);
      
      if (x < 800 && y < 225) {
        if (beeps[user_num] === 1) {
          play_green();
          if (user_num === (beeps.length - 1)) {add_beep();}
        } else {
          audio5.play();
          if (strict) {
            setTimeout(strict_start, 2000);
          } else {
            i = 1;
            setTimeout(play_beeps, 2000);
          }
        }
      }
      
      if (x > 800 && y < 225) {
        if (beeps[user_num] === 2) {
          play_red();
          if (user_num === (beeps.length - 1)) {add_beep();}
        } else {
          audio5.play();
          if (strict) {
            setTimeout(strict_start, 2000);
          } else {
            i = 1;
            setTimeout(play_beeps, 2000);
          }
        }
      }       

      if (x > 800 && y > 225) {
        if (beeps[user_num] === 3) {
          play_blue();
          if (user_num === (beeps.length - 1)) {add_beep();}
        } else {
          audio5.play();
          if (strict) {
            setTimeout(strict_start, 2000);
          } else {
            i = 1;
            setTimeout(play_beeps, 2000);
          }
        }
      }           
        
      if (x < 800 && y > 225) {
         if (beeps[user_num] === 4) {
          play_yellow();
          if (user_num === (beeps.length - 1)) {add_beep();}
        } else {
          audio5.play();
          if (strict) {
            setTimeout(strict_start, 2000);
          } else {
            i = 1;
            setTimeout(play_beeps, 2000);
          }
        }
      }          
        
    }
  });
  
  function strict_start() {
    i = 1;
    beeps = [];
    beep_num = Math.floor((Math.random() * 18) + 1);
    //beep_num = 5;
    for (var j = 1; j <= beep_num; j++) {
      beeps[j] = Math.floor((Math.random() * 4) + 1);
    }
    user_num = 0;
    delay = 500;
    //add_beep();
    play_beeps();
  }
  
  function add_beep() {
    user_num = 0;
    beep_num += 1;
    beeps[beep_num] = Math.floor((Math.random() * 4) + 1);
    if (beeps.length > 21) {audio6.play(); $(".stop_button").trigger("click");}
    //$(".display").html(beep_num);
    i = 1;
    play_beeps();
  }
    
  function play_beeps () {
    $(".display").html(beep_num);
    //$("#debug").html(beeps);
    if (beeps.length > 5) {delay = 400;}
    if (beeps.length > 9) {delay = 350;}
    if (beeps.length > 13) {delay = 300;}
    user_num = 0;
    setTimeout(function () {
      if (beeps[i] === 1) {play_green();}
      if (beeps[i] === 2) {play_red();}
      if (beeps[i] === 3) {play_blue();}
      if (beeps[i] === 4) {play_yellow();}
      i++;
      if (i < beeps.length) {
        play_beeps();
      }
    }, delay * 2.5)
  }
  
  // Play the buttons //
  
  function play_green() {
    $("#base").hide();
    $("#green").show();
    audio1.play();
    setTimeout (function() {
      $("#green").hide();
      $("#base").show();
    }, delay);
  }
  
  function play_red() {
    $("#base").hide();
    $("#red").show();
    audio2.play();
    setTimeout (function() {
      $("#red").hide();
      $("#base").show();
    }, delay);
  }
  
  function play_blue() {
    $("#base").hide();
    $("#blue").show();
    audio3.play();
    setTimeout (function() {
      $("#blue").hide();
      $("#base").show();
    }, delay);
  }
  
  function play_yellow() {
    $("#base").hide();
    $("#yellow").show();
    audio4.play();
    setTimeout (function() {
      $("#yellow").hide();
      $("#base").show();
    }, delay);
  }  
  
});

