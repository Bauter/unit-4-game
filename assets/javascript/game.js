


// 
$(document).ready(function() {
    //global variables
    let wins = 0;
    let losses = 0;
    let userScore = 0;

    console.log('wins: ' + wins);
    console.log('losses: ' + losses);
    

    // random values need to assigned to each individual crystal
    let crystalOne = Math.floor((Math.random() * 12) + 1);
    let crystalTwo = Math.floor((Math.random() * 12) + 1);
    let crystalThree = Math.floor((Math.random() * 12) + 1);
    let crystalFour = Math.floor((Math.random() * 12) + 1);

    console.log('crystal-one: ' + crystalOne);
    console.log('crystal-two: ' + crystalTwo);
    console.log('crystal-three: ' + crystalThree);
    console.log('crystal-four: ' + crystalFour);

    // random number generated and assigned to 'randomNum' variable
    
    let randomNum = Math.floor((Math.random() * 120) + 19); // having trouble staying under 120...
    
    console.log('random computer number: ' + randomNum)

    function generate() {
        randomNum = Math.floor((Math.random() * 120) + 19); // having trouble staying under 120...
    };

    $("#random-number").html("Number to match: " + randomNum);
    
    // reset function
    function reset() {
        userScore = 0;
        generate(); 
        $("#random-number").html("Number to match: " + randomNum); 
        crystalOne = Math.floor((Math.random() * 12) + 1);
        crystalTwo = Math.floor((Math.random() * 12) + 1);
        crystalThree = Math.floor((Math.random() * 12) + 1);
        crystalFour = Math.floor((Math.random() * 12) + 1);
        
    };

    let resultCheck = function() {
        if (userScore === randomNum) {   
            wins++;
           // $("#result").text("YOU WON!");
            alert ("YOU WON!");
            $("#wins").text("wins: " + wins);
            reset();
        } else if (userScore > randomNum) {
            losses++;
           // $("#result").text("You LOST!");
            alert ("YOU LOST!");
            $("#losses").text("Losses: " + losses);
            reset();
        }
    };

    // click event for each crystal
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



