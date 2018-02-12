		
		var words = ["Final Fantasy", "Halo", "Zelda"];
		var wins = 0;
		var missCount = 0; 	

		document.onkeyup = function(event)	{
		
		// user's input	
			var userGuess = event.key;

			addLetter(userGuess);

		//function loop where the user input is checked against the chosenWord
			function checkInput () {
				if (userGuess === choiceToArray) {
					console.log("Great guess!")
				} else {
					console.log("Nice try, but no cigar!")
				};
			};	

			checkInput(userGuess);

		}

		//gets the computer to choose a random word from the array above
			var chosenWord = words[Math.floor(Math.random() * words.length)];
			console.log(chosenWord);

		//takes the computer's choice and converts it to an array	
			var choiceToArray = chosenWord.split('');
			console.log(choiceToArray);

			var wordLength = choiceToArray.length;
			console.log(wordLength);

		//empty array where user's guessed letters will be placed
			var guessedLetters = [];

		//pushes a letter to the above array
			function addLetter (letter) {
				guessedLetters.push (letter)
				console.log("letters guessed: " + guessedLetters)
			};



             var html = "<p>Wins: " + wins + "</p>" +
                        "<p>Misses: " + missCount + "<p>" +
                        "<p>Word length: " + chosenWord.length + "</p>";
             
             document.querySelector("#results").innerHTML = html;