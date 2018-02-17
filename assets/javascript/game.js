

		var words = ["Spyro", "Halo", "Zelda"];
		var wins = 0;
		var missCount = 0; 	
		var userGuess = [];
		var guessedLetters = [];
		var userGuessArray = [];
		var guessesLeft = 6;	

		//gets the computer to choose a random word from the array above
			var randomWord = words[Math.floor(Math.random() * words.length)];
			var chosenWord = randomWord.toLowerCase();
			console.log(chosenWord);
	
		//takes the computer's choice and converts it to an array	
			var choiceToArray = chosenWord.split('');
			console.log(choiceToArray);

		//converts word choice to array
			var wordLength = choiceToArray.length;
			// userGuessArray = new Array(wordLenth);
			console.log(wordLength);
		//displaying blanks to user
		displayInitialBlanks();		

			function displayInitialBlanks() {
				for (var i = 0; i <= choiceToArray.length - 1; i++) {
					if (choiceToArray[i] === ' ') {
						userGuess[i] = '&nbsp';
						userGuessArray.push(userGuess[i]);
					} else {
						userGuess[i] = ' _ ';
						userGuessArray.push(userGuess[i]);
					};
					document.querySelector("#blanks").innerHTML = userGuessArray.join('');
				};
			}

		document.onkeyup = function(event)	{
		
		// user's input	
			var userGuess = event.key;
			console.log(userGuess);
			
			updateArray(choiceToArray, userGuess);
		
		//pushes a letter to the above array
			function addLetter (letter) {
				guessedLetters.push (letter)
				console.log("letters guessed: " + guessedLetters)
			};

			addLetter(userGuess);

			document.querySelector("#guessed-letters").innerHTML = guessedLetters;
			
			function updateArray (choiceToArray, userGuess) {
				var index = choiceToArray.indexOf(userGuess);
				if (index > -1) {
					var removed = userGuessArray.splice(index, 1, userGuess);
					displayCurrentGuesses();
					console.log(userGuessArray);
					console.log(choiceToArray);
					} 
				else if (choiceToArray.indexOf(userGuess)) {
					console.log("nada");
					var decrementGuesses =	guessesLeft--;
					console.log(decrementGuesses);
					}
			}
		

			function displayCurrentGuesses() {
				for (var i = 0; i <= userGuessArray.length - 1; i++) {
					document.querySelector("#blanks").innerHTML = userGuessArray.join('');
				}
			};

		};
		//function to stop the game
			function youLose (decrementGuesses) {
				if (decrementGuesses === 0) {
					console.log("fuck")
					alert("YOU LOSE, BOOOOOO")
					return;
				}
			}




             var html = "<p>Wins: " + wins + "</p>" +
                        "<p>Misses: " + missCount + "<p>" +
                        "<p>Word length: " + chosenWord.length + "</p>";
             
             document.querySelector("#results").innerHTML = html;

