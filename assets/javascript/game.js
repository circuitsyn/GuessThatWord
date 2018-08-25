window.onload = function(){


var hangmanGame = {
    wordBank: ["Homer Simpson","Apu Nahasapeemapetilon","Marge Simpson","Groundskeeper Willy","Krusty The Clown","Professor Frink","Blinky","Bleeding Gums Murphy","Hugo Simpson ","Kang","Mr Sparkle","Sideshow Mel"], //array to store different words for hangman game
    imgBank: [],
    wins: 0, //variable to store wins
    losses: 0, //variable to store losses
    guessesLeft: 10, //variable for guesses left
    userGuess: "", //variable to store user choice keyboard input
    wrongGuesses: [], //array to store and display wrong guesses
    currentWord: [], // array to compare and store current chosen word from wordBank
    underscores: [], //array to display '_' for unsolved letters in word
    chooseWord : function() {
        currentWord = (this.wordBank[Math.floor(Math.random() * this.wordBank.length)]).split("");
    },
    setScoreLength: function() {
        console.log(currentWord.length);
        for (i=0; i<currentWord.length; i++){
        this.underscores[i] = "_";
        }
        console.log(this.underscores.length);
        for (j=0; j<this.underscores.length; j++){
            console.log(j);
        document.getElementById("fillunderscore").innerHTML += this.underscores[j];
        }
    },
    supplyGuesses: function() {
        document.getElementById("guessCount").innerHTML = hangmanGame.guessesLeft;
    }

};



// stores keypress in userGuess
document.onkeyup = function(event){
hangmanGame.userGuess = event.key.toLowerCase();
hangmanGame.chooseWord();
hangmanGame.setScoreLength();
hangmanGame.supplyGuesses();
console.log(hangmanGame.underscores);
console.log(currentWord);
console.log(hangmanGame.userGuess) ;
    
//     console.log(hangmanGame.wordBank.length);

}

    // // console.log(currentWord);
    // console.log(hangmanGame.chooseWord());f
    // console.log(hangmanGame.userGuess)
    // console.log(hangmanGame.wordBank.length);
    
console.log(hangmanGame.guessesLeft);

    
};



  