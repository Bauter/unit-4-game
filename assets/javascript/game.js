


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
    

    // click event for each crystal
    $("#crystal-one").on("click", function() {
        userScore = userScore + crystalOne 
        console.log(userScore);
    });

    $("#crystal-two").on("click", function() {
        userScore = userScore + crystalTwo
        console.log(userScore)
    });

    $("#crystal-three").on("click", function() {
        userScore = userScore + crystalThree
        console.log(userScore)
    });

    $("#crystal-four").on("click", function() {
        userScore = userScore + crystalFour
        console.log(userScore)
    });
    // update user number based on clicked crystal values

    // reset function
    function reset() {
        userScore = 0;
        randomNum = Math.floor((Math.random() * 120) + 19);
        crystalOne = Math.floor((Math.random() * 12) + 1);
        crystalTwo = Math.floor((Math.random() * 12) + 1);
        crystalThree = Math.floor((Math.random() * 12) + 1);
        crystalFour = Math.floor((Math.random() * 12) + 1);
    }

    //determine win lose condition
    if (userScore === randomNum) {   
        wins++;
        alert('You WON! Play again?')
        reset();
    } if (userScore > randomNum) {
        losses++;
        alert('GAME OVER! You lost, try again?');
        reset();
    };
    

    
    // write to DOM











});



