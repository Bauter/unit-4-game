
$(document).ready(function() {
    //global variables
    let wins = 0;
    let losses = 0;
    let userScore = 0;
    let max = 120;
    let min = 19;

    console.log('wins: ' + wins);
    console.log('losses: ' + losses);
    

    // random values need to assigned to each individual crystal
    let crystalOne = Math.floor((Math.random() * 12) + 1);
    let crystalTwo = Math.floor((Math.random() * 12) + 1);
    let crystalThree = Math.floor((Math.random() * 12) + 1);
    let crystalFour = Math.floor((Math.random() * 12) + 1);

    // console.log for accuracy
    console.log('crystal-one: ' + crystalOne);
    console.log('crystal-two: ' + crystalTwo);
    console.log('crystal-three: ' + crystalThree);
    console.log('crystal-four: ' + crystalFour);


    // random number generated and assigned to 'randomNum' variable
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min; 

    // console.log for accuracy
    console.log('random computer number: ' + randomNum);


    // function created to generate new number when function is called in function reset
    function generate() {
        randomNum = Math.floor(Math.random() * (max - min + 1)) + min; 
    };

    // DOM manipulation to write original randomNum value to page
    $("#random-number").html("Number to match: " + randomNum);

    // an attempt to create a function that can be called to clear out the result win/lose result div upon reset to avoid using alerts....cant seem to make it work, tried multiple placements (click event, reset function, etc), tried empty, remove, text, clear. and/or prevents original div win/loose display in resultCheck. 
    function resultClear() {
        $("#result").text(" ");
    };

    // reset function
    function reset() {
        userScore = 0;
        generate(); 
        $("#random-number").html("Number to match: " + randomNum); 
        crystalOne = Math.floor((Math.random() * 12) + 1);
        crystalTwo = Math.floor((Math.random() * 12) + 1);
        crystalThree = Math.floor((Math.random() * 12) + 1);
        crystalFour = Math.floor((Math.random() * 12) + 1);
        resultClear();
    };

    //conditional statement written in a function to be called upon with every click event, attempt to keep code concise
    let resultCheck = function() {
        if (userScore === randomNum) {   
            wins++;
            $("#result").text("YOU WON!");
           // alert ("YOU WON!"); // used an alert because unable to display and clear out result div text upon win or lose 
            $("#wins").text("wins: " + wins);
            setTimeout(reset(), 2000); // attempt to delay reset to allow result div to display win/lose and then reset and clear
            
        } else if (userScore > randomNum) {
            losses++;
            $("#result").text("You LOST!");
            //alert ("YOU LOST!"); // used an alert because unable to display and clear out result div text upon win or lose 
            $("#losses").text("Losses: " + losses);
            setTimeout(reset(), 2000); // attempt to delay reset to allow result div to display win/lose and then reset and clear
            
        }
    };

    // click event for each crystal w/ console.log for accuracy
    $("#crystal-one").on("click", function() {
        userScore = userScore + crystalOne
        resultCheck();
        $("#user-score").text("Your total: " + userScore);
        console.log(userScore);
    });

    $("#crystal-two").on("click", function() {
        userScore = userScore + crystalTwo
        resultCheck();
        $("#user-score").html("Your total: " + userScore);
        console.log(userScore)
    });

    $("#crystal-three").on("click", function() {
        userScore = userScore + crystalThree
        resultCheck();
        $("#user-score").html("Your total: " + userScore);
        console.log(userScore)
    });

    $("#crystal-four").on("click", function() {
        userScore = userScore + crystalFour
        resultCheck();
        $("#user-score").html("Your total: " + userScore);
        console.log(userScore)
    });


});



