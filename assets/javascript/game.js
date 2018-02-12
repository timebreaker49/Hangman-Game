		
		var words = ["Final Fantasy", "Halo", "Zelda"];
		var wins = 0;
		var missCount = 0; 		
//		var guessedLetters = 

		document.onkeyup = function(event)	{
		
		// user's input	
			var userGuess = event.key;

			addLetter(userGuess);
		}
/*
takes a string and creates an array
var str = 'abcdefg';
var ar = str.split(''); // empty string separator
console.log( ar ); // [ "a", "b", "c", "d", "e", "f", "g" ]
//need to add a query selector to the html above or figure out another display method */
		

		//gets the computer to choose a random word from the array above
			var chosenWord = words[Math.floor(Math.random() * words.length)];
			console.log(chosenWord);

		//takes the computer's choice and converts it to an array	
			var choiceToArray = chosenWord.split('');
			console.log(choiceToArray);
		//empty array where user's guessed letters will be placed
			var guessedLetters = [];


			function addLetter (letter) {
				guessedLetters.push (letter)
				console.log("letters guessed: " + guessedLetters)
			};

             var html = "<p>Wins: " + wins + "</p>" +
                        "<p>Misses: " + missCount + "<p>";
             
             document.querySelector("#results").innerHTML = html;