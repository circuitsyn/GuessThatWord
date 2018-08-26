window.onload = function(){

var wordBank = ["Homer Simpson","Apu Nahasapeemapetilon","Marge Simpson","Groundskeeper Willy","Krusty The Clown","Professor Frink","Blinky","Bleeding Gums Murphy","Hugo Simpson ","Kang","Mr Sparkle","Sideshow Mel"]; //array to store different words for hangman game

var wins = 0;
var losses = 0;
var guessesLeft = 10; //variable for guesses left
var guessesSoFar = []; //array to store and display wrong guesses
var userGuess = ""; //variable to store user choice keyboard input
var currentWord = (wordBank[calc=(Math.floor(Math.random() * wordBank.length))]).split(""); // array to compare and store current chosen word from wordBank
var underscores = []; //array to display '_' for unsolved letters in word
// var imgBank = ["assets/images/homeSimpson.png",
// "assets/images/margeSimpson.png",
// "assets/images/GroundskeeperWillie.png",
// "assets/images/KrustyTheClown.png",
// "assets/images/professorFrink.png",
// "assets/images/Blinky.png",
// "assets/images/BleedingGumsMurphy.png",
// "assets/images/HugoSimpson.png",
// "assets/images/Kang.png",
// "assets/images/MrSparkle.png",
// "assets/images/sideShowMel.png"]; //array to store images that match word to be guessed

underscores.length = currentWord.length;
        for (i=0; i<currentWord.length; i++){
        underscores[i] = "_";
        }
//pulls key from key press
    document.onkeyup = function(event){
    // stores keypress in userGuess
        
    var userGuess = event.key.toLowerCase();
    console.log("userGuess = " + userGuess);

    for (j=0; j<currentWord.length;j++) {
        if (currentWord[j] === userGuess) {
            underscores[j] = userGuess;
            guessesLeft--;
            console.log(underscores);

            }
        }
        guessesSoFar.push(userGuess); 
        if(currentWord == underscores) {
            wins++;
            currentWord = (wordBank[Math.floor(Math.random() * wordBank.length)]).split("");
            guessesLeft = 10;
        }
            else if (guessesLeft == 0) {
                // document.getElementById('guessPic').innerHTML = '<img src="' + imgBank[calc].join('" /><img src="') + '" />';
                losses++;
                currentWord = (wordBank[Math.floor(Math.random() * wordBank.length)]).split("");
                guessesLeft = 10;
            }
                else {
                    for (j=0; j<underscores.length; j++){
                        document.getElementById("fillunderscore").innerHTML = underscores;
                    }
                    guessesLeft--;
                    for (j=0; j<currentWord.length;j++) {
                        if (currentWord[j] === userGuess) {
                            underscores[j] = userGuess;
                            console.log(underscores);
            }
        }
    }





    document.getElementById("winCount").innerHTML = wins;
    document.getElementById("guessCount").innerHTML = guessesLeft;
    document.getElementById("tries").innerHTML = guessesSoFar;

    }

};



    
       
    
    

    
    
    

    
    
        
    
    
    



//         for (j=0; j<underscores.length; j++){
//             document.getElementById("fillunderscore").innerHTML = underscores[j];
//         }
//     }
//     function supplyGuesses() {
//         guessesLeft--;
//         document.getElementById("guessCount").innerHTML = guessesLeft;
//     }
//     function pushGuesses() {
//         guessesSoFar.push(userGuess);
//         document.getElementById("tries").innerHTML = guessesSoFar; 
//     }

// };
      