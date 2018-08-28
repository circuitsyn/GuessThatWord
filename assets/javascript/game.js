window.onload = function(){
    

    var hangmanGame = {
        wordBank: ["homer","apu","marge","willy","krusty","frink","blinky","hugo","kang","sparkle","mel"], //array to store different words for hangman game
        wins: 0, //variable to store wins
        losses: 0, //variable to store losses
        remainingLetters: 0,
        guessesLeft: 10, //variable for guesses left
        userGuess: "", //variable to store user choice keyboard input
        guessesSoFar: [], //array to store and display wrong guesses
        currentWord: [], // array to compare and store current chosen word from wordBank
        underscores: [], //array to display '_' for unsolved letters in word
        imgBank: ["assets/images/homerSimpson.png", //storage bank for images
                    "assets/images/apu.png",
                    "assets/images/margeSimpson.png",
                    "assets/images/GroundskeeperWillie.png",
                    "assets/images/KrustyTheClown.png",
                    "assets/images/professorFrink.png",
                    "assets/images/Blinky.png",
                    "assets/images/HugoSimpson.png",
                    "assets/images/Kang.png",
                    "assets/images/MrSparkle.png",
                    "assets/images/sideShowMel.png"],

        //function to choose word from word bank and break it apart to fill the array
        chooseWord: function() {
            this.currentWord = (this.wordBank[Math.floor(Math.random() * this.wordBank.length)]).split("");
            console.log(this.currentWord.length);
            this.remainingLetters = this.currentWord.length;
            // remainingLetters = remainingLetters;
            console.log(this.remainingLetters);
            
        },

        //function to determine and set the underscore array based on chosen word
        setUnderscoreLength: function() {
            
            
            this.underscores.length = this.currentWord.length;
            console.log(this.underscores.length);
            for (i=0; i<this.currentWord.length; i++){
            this.underscores[i] = "_";
            // console.log(this.underscores.length);
            // console.log(currentWord.length);
            }
            // console.log(this.underscores.length);

            //pushes underscore set from array to DOM
            for (j=0; j<this.underscores.length; j++){
                document.getElementById("fillunderscore").innerHTML = this.underscores.join(" ");
            }
            //set underscore counter counter
            // this.remainingLetters = this.currentWord.length;
            // console.log(this.remainingLetters);

        },

        //function that pushes the guesses left count to the DOM
        supplyGuesses: function() {
            this.guessesLeft--;
            document.getElementById("guessCount").innerHTML = hangmanGame.guessesLeft;
        },

        //function that pushes the guesses made to the DOM
        pushGuesses: function () {
            this.guessesSoFar.push(this.userGuess);
            document.getElementById("tries").innerHTML = hangmanGame.guessesSoFar; 
        },

        //function to push wins and losses starter count
        supplyWinsLosses: function() {
            document.getElementById("winCount").innerHTML = this.wins;
            document.getElementById("lossCount").innerHTML = this.losses;
        },
        //function to update images

        //function change array and update
        gameWordUpdate: function () {
            console.log(this.currentWord.length);
            for (j=0; j<this.currentWord.length;j++) {
                console.log(this.currentWord.length);
                console.log(this.userGuess);
                if (this.currentWord[j] === this.userGuess) {
                this.underscores[j] = this.userGuess;
                this.remainingLetters--;
                this.userGuesses--;
                console.log(this.underscores);
                }
            }

            //pushes underscore set from array to DOM
            for (j=0; j<this.underscores.length; j++){
                document.getElementById("fillunderscore").innerHTML = this.underscores.join(" ");
    
                }
            
        },

        //Reset function
        resetFunc: function() {
            hangmanGame.wins++;
            hangmanGame.guessesLeft = 10;
            hangmanGame.currentWord = []; 
            hangmanGame.underscores = [];
        },
    };
    
    // debugger;

    //initialte a word choice from word bank for game start
    hangmanGame.chooseWord();

    //sets underscope array length and outputs to DOM
    hangmanGame.setUnderscoreLength();

    
    //grabs keypress on key up
    document.onkeyup = function(event){
          
    //stores key press into userGuess variable
    hangmanGame.userGuess = event.key.toLowerCase();
    hangmanGame.pushGuesses();
    
    
    
    console.log(hangmanGame.underscores);
    console.log(hangmanGame.currentWord);
    console.log(hangmanGame.userGuess);
    console.log(hangmanGame.remainingLetters);
        
    
    
    //Created a while loop to check for wins (succesful word match) and if not enter to play game

        
        
    if ((hangmanGame.remainingLetters || this.remainingLetters) > 0){
        //call to push track and push guesses left count
        hangmanGame.supplyGuesses();

        //call function to push wins and losses starter count
        hangmanGame.supplyWinsLosses();

        //object method call to push guesses to DOM
        // hangmanGame.pushGuesses();

        //compared useguess to current word and then applies change to underscores if matched
        //if yes change underscore and update underscore 
        //decrement guess
        hangmanGame.gameWordUpdate();
        hangmanGame.userGuesses--;

        // document.onkeyup = function(event){
    
        // //stores key press into userGuess variable
        // hangmanGame.userGuess = event.key.toLowerCase();
        //else break out to ask for another key
        //decrement guess
        //push new guess to screen
        // hangmanGame.pushGuesses();
        }
        else if (hangmanGame.remainingLetters=0) {
            //initialte a word choice from word bank for game start
            hangmanGame.chooseWord();

            //sets underscope array length and outputs to DOM
            hangmanGame.setUnderscoreLength();
            //Breakout
            //wins++
            //reset -> # guesses
            //      -> reset array to 0 (does it overwrite?)
            hangmanGame.resetFunc();
            }
    
  
        }
    
};
    
    
    
      