// alert("Hello Beautiful, Your Javascript is all hooked up, enjoy your homework journey");

// These are my global variables*********************


var timeRemain = 5;
var answerOne = ["an old silk hat", "a dirty sock", "a cucumber nose", "a corn cob pipe"];
var answerTwo;
var answerThree;
var answerFour;
var answerCorrect = 0;
var answerWrong = 0;
var answerUnanswered = 0;
var hold;
// This is my code for when you click on the start button that makes it go to main game screen but doesn't work.  Also should hold a buch of code for everything happening on the main game screen.
$(".btn").click(function() {
    // alert( "You clicked the start button" );

    $(".btn").remove();
    $("#remain").append("Time Remaining: " + timeRemain);
    
    

    // This will start my countdown when the start button is clicked

    function run()  {

      hold=setInterval(decrement, 1000);

    }

    function decrement(){

      timeRemain--;
      $("#remain").html("Time Remaining: " + timeRemain);
    }
    run();


    // This stops my timer

    setTimeout(function(){ alert("Now you need to quit screwing around and use logic to append some scores to right and wrong answers or Glen's gonna give you anothe C"); }, 6000);
  

   



    // var index = $(this).attr("data-index");

    // if(index === storedAnswer){
      
    // }

  });

  
  








//   setTimeout method and code for last screen goes here

