// alert("Hello Beautiful, Your Javascript is all hooked up, enjoy your homework journey");

// These are my global variables*********************


var timeRemain = 60;
var answerOne = ["an old sil hat", "a dirty sock", "a cucumber nose", "a corn cob pipe"];
var answerTwo;
var answerThree;
var answerFour;
var answerCorrect;
var answerWrong;
var answerUnanswered;

// This is my code for when you click on the start button that makes it go to main game screen but doesn't work.  Also should hold a buch of code for everything happening on the main game screen.
$(".btn").click(function() {
    // alert( "You clicked the start button" );
    $(".btn").remove();
    $("#remain").append("Time Remaining: " + timeRemain);
    $("#one").append("Question One");
    $("#two").append("Question Two");
    $("#three").append("Question Three");
    $("#four").append("Question Four");
  });





//   setTimeout method and code for last screen goes here

