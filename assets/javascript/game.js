var goal, current, redNumber, yellowNumber, blueNumber, greenNumber, win, loss;

var resetGame = function(){
    goal = Math.floor(Math.random()*101 + 19);
    current = 0;
    redNumber = Math.floor(Math.random()*12);
    yellowNumber = Math.floor(Math.random()*12);
    blueNumber = Math.floor(Math.random()*12);
    greenNumber = Math.floor(Math.random()*12);

}

resetGame();

$(document).ready(function(){
    $("#button-red").attr('value', redNumber);
    $("#button-yellow").attr('value', yellowNumber);
    $("#button-blue").attr('value', blueNumber);
    $("#button-green").attr('value', greenNumber);
    console.log("hello there", redNumber, yellowNumber, blueNumber, greenNumber)

    $('.crystal-button').click(function(){
        current += parseInt($(this).attr('value'));
        console.log(current);
    });

    $('.value').text(goal);

    $('body').css('background-image',
 'url("assets/images/background.png")');


});


//use for wins and losses
//$('#win').text(wins);
//$('#loss').text(losses);

/*if(#win === true){
    $("#win").append($("win").text("You won!!"));
      setGame();
*/


// set goal number
// set current score counter
// set wins and losses
// add images and background
