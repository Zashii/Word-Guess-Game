var sound = document.createElement("audio");
        sound.setAttribute("src", "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-18146/zapsplat_warfare_sword_swipe_slash_body_squelch_20830.mp3");

            // Game Object
             var game = {
                  winCount : 0,
                  hiddenWord : "",
                  words : ["knight", "castle", "king", "sword", "catapult", "archer", "dragon", "wizard", "war"],
                  word : "",
                  guesses : 0,

                  gameStart : function() {
                      
                      document.getElementById("pastGuesses").textContent = "";

                      this.hiddenWord = "";
                      this.word = this.words[Math.floor(Math.random()*this.words.length)];

                      if (this.hiddenWord == ""){
                                
                            for (var i = 0; i < this.word.length; i ++){
                                this.hiddenWord = this.hiddenWord + "_"
                            }

                            document.getElementById("text").textContent = this.hiddenWord;
                                        
                      }

                      this.guesses = this.word.length + 3;
                      document.getElementById("guessCount").textContent = this.guesses;

                  },

                  gameSetup : function(e) {

                      this.guesses -= 1;
                      document.getElementById("guessCount").textContent = this.guesses;
                      document.getElementById("pastGuesses").textContent = document.getElementById("pastGuesses").textContent + " " + e.key;

                      for (var y = 0; y < this.word.length; y ++){
                          if (this.word[y] == e.key) {
                              this.hiddenWord = this.hiddenWord.substr(0, y) + e.key  + this.hiddenWord.substr(y + 1);
                              document.getElementById("text").textContent = this.hiddenWord;
                          }
                      }
                  },

                  win : function() {
                      document.getElementById("text").textContent = "You win!";
                      sound.play();
                      this.winCount ++;
                      document.getElementById("winCount").textContent = this.winCount;
                  },

                  lose : function() {
                      document.getElementById("text").textContent = "You lose!";
                  }

             };


            // Initializing the game

           

            // Reacting to the user's input
            document.onkeyup = function(e) {

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
