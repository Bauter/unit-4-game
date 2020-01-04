# unit-4-game

---What is this repo?---

The purpose of this repo is to create a basic number matching game with click events using jquery.

-The object is to have the computer select a random number between 19 - 120 and assign a random number between 1 - 12 to each crystal displayed. The user clicks on the crystals to try and match the listed number.

-If the user fails to match their score with the random computer number, a 'losses' counter is applied and the game resets
  
-If the user matches the computer random number, a "wins" counter is applied and the game resets


Initially this project was designed for my "Web-dev coding boot-camp" as an entry level basic jquery project.

---How was this project created?---

-Coding was done using Visual Studio Code ("https://code.visualstudio.com/") a text editor can be downloaded from their website.

-The styling for this project was done linking in 'Bootstrap 4' via CDN ("https://getbootstrap.com/"), and making use of the jumbotron element. Slight bootstrap modifications were done to initial html class names. The link above can be used to find the CDN link to copy and paste in between your 'head' tags in your html file. for further explanation on how to use and style, please consult the 'documentation' (found on the nav bar).


-Local CSS file created and used to style text and background image. Linked in between 'head' tags and within an opening 'script' tag, the file path relative to the html file, and closed by a closing script tag. 

-assets folder created to hold CSS code and an image directory used to hold games images. 

-Javascript file was created to write the logic for the game using jquery library. creating functions to:
    1. Log and score user crystal click via onClick() function
    2. Generating a random computer number between 19 - 120 using [let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;].
    3. Generating 4 random numbers between 1 - 12 for each crystal image using [Math.floor((Math.random() * 12) + 1);].
    4. Conditional else if statement was written inside resultCheck() function used to compare user score to computer random number, based on the condition either the player wins, a wins counter is scored, win result displayed to the DOM, and  game reset. Or the player loses, and losses counter is scored and the game resets
    5.Reset() function created resetting user score, reassigning crystal image values to new numbers, calling generate() function to generate a new computer random number, and calling resultClear() function to clear 'result' div win/lose text.
    6. DOM manipulation is then used to write the text strings and scores to individual divs inside the jumbotron container via .text jquery methods.

    *NOTE - resultClear() function has proved to be problematic, purpose was to avoid using an alert function and instead add additional DOM manipulation. resultClear() can be removed to display win/lose result, however result won't clear out in new game until another win or loss happens. With resultClear function called, initial result div text "You WON!/You LOST!" wont display. setTimeout(), .remove, .clear, .empty, .text methods all attempted to resolve said problem to no avail. alert function already written has been commented out for the time being

---Guidelines for Collaboration---

-As I am still new to coding, and my initial projects will be used to create a portfolio to show to potential employers, i ask that no modifications are made at this time.

-!However!-

 -Any input to improve my coding would be GREATLY appreciated. I am not opposed to the files being pulled for the sake of modifying and using as an example to teach/explain alt. methods, better practice, etc. Again I would ask they not be pushed to the repo to modify the initial document, but instead be sent to me an some alt. way.

 --Thank you for taking the time to look over this 'README' file--