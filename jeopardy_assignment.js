

(function() {
var submitButton = $('#submit-button');
var answer;
var points;
var score_amount = $("#score");

$(document).ready(function(){
  newQuestion();
});

function newQuestion() {
  $.get( "http://jservice.io/api/random", function( data ) {

    $.each(data, function(index, value){
      $( "#category" ).html( value.category.title );
      $( "#value" ).html( value.value );
      $( "#question" ).html( value.question );
      console.log(value.answer);
      answer = value.answer;
      points = value.value;
      //console.log(key + ":" + value);
      // $.each(value, function(key, value){
      //   $( "#category" ).html( value.category );
      //   $( "#value" ).html( "this is the value of the question" );
      //   $( "#question" ).html( "test" );
      //   console.log(key + ":" + value);
      // })
    })
  })
}
  submitButton.click(function() {
    if (getText() == answer) {
      console.log("YAY");
      score_amount.html(parseInt(points) + parseInt(score_amount.html()));
      newQuestion();
      //console.log(getText());
    } else {
      console.log("wrong");
      score_amount.html(parseInt(score_amount.html() - parseInt(points)));
      newQuestion();
      //console.log(getText())

    }
    $('#answer-value').val("");
  })




  function getText() {
    return $('#answer-value').val();
  }

})();



//  Your challenge:
//
// Retrieve a question when the page loads and display it on the screen.
// Each question should display the category, point value, and the question
// text. You should also have a text box that people can type their answer
// into, and a button they can click to submit their answer.
//
// Keep track of the user's score. When the user clicks the 'guess' button,
// you should check to see if they got the answer right. If they did,
// increase their score by the value of the question (provided in the
// AJAX response). If they didn't, no points are awarded or lost.
//
// After users guess, load a new question.
