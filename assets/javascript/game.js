var sound = document.createElement("audio");
        sound.setAttribute("src", "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-18146/zapsplat_warfare_sword_swipe_slash_body_squelch_20830.mp3");

            // Game Object
             var game = {
                  winCount : 0,
                  hiddenWord : "",
                  words : ["knight", "castle", "king", "sword", "catapult", "archer", "dragon", "wizard", "war"],
                  word : "",
                  guesses : 0,

                  // Initializing the game

                  gameStart : function() {
                      
                      document.getElementById("pastGuesses").textContent = "";

                      this.hiddenWord = "";

                      //Choosing the word from the words array
                      this.word = this.words[Math.floor(Math.random()*this.words.length)];

                      // Creating the hidden word
                      if (this.hiddenWord == ""){
                                
                            for (var i = 0; i < this.word.length; i ++){
                                this.hiddenWord = this.hiddenWord + "_"
                            }

                            document.getElementById("text").textContent = this.hiddenWord;
                                        
                      }

                      // You are given guesses equal to the word's length + 3
                      this.guesses = this.word.length + 3;
                      document.getElementById("guessCount").textContent = this.guesses;

                  },

                  // Processing the result of the user's input

                  gameSetup : function(e) {

                      //Guesses count goes down by 1
                      this.guesses -= 1;
                      document.getElementById("guessCount").textContent = this.guesses;

                      //Past guesses display is updated
                      document.getElementById("pastGuesses").textContent = document.getElementById("pastGuesses").textContent + " " + e.key;

                      //If the hidden word contains the letter that the user inputted, re-create hiddenWord with the revealed letter
                      for (var y = 0; y < this.word.length; y ++){
                          if (this.word[y] == e.key) {
                              this.hiddenWord = this.hiddenWord.substr(0, y) + e.key  + this.hiddenWord.substr(y + 1);
                              document.getElementById("text").textContent = this.hiddenWord;
                          }
                      }
                  },

                  // Win method
                  win : function() {
                      document.getElementById("text").textContent = "You win!";
                      sound.play();
                      if (this.word != ""){
                        this.winCount ++;
                      }
                      document.getElementById("winCount").textContent = this.winCount;
                  },

                  // Lose method
                  lose : function() {
                      document.getElementById("text").textContent = "You lose!";
                  }

             };

            // Event listener that listens to the user's input
            document.onkeyup = function(e) {

                //if the game hasn't started yet, run the gameStart method
                if (word = ""){
                    game.gameStart();
                }

                game.gameSetup(e);

                // Win condition
                if (game.hiddenWord == game.word) {
                    game.win();
                    game.gameStart();

                // Lose condition
                } else if (game.guesses == 0) {
                    game.lose();
                    game.gameStart();

                }
                
          }
