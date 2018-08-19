var alphabet = "abcdefghijklmnopqrstuvwxyz"
var alphabetArray = alphabet.split("")
console.log(alphabetArray)
//creating the word bank to select the words
var wordBank = ["Pear", "Apple", "Plum"]
//create a random number to use in the next line to select for my array
var index = Math.floor(Math.random() * wordBank.length)
//use random number in conjunction with wordbank array to get a random word from my bank
var chosenWord = wordBank[index].toLowerCase()
console.log('The chosen word is: ${chosenWord}')
//take random word and split it into an array
var chosenWordArray = chosenWord.split("")
//make a blank array to push underscores to. The amount of underscores will match the amount of letters in the chosen word.
var underscoreArray = []
//create for loop to push out underscores for the chosen word
for (var i = 0; i < chosenWordArray.length; i++) {
    underscoreArray.push("_ ")
}
var wins = 0
var guessLeft = 10
var winMask =""
var wrongLetter = []
var wrongLetterTxt = document.getElementById('wrong-letter')
var underscoreString = underscoreArray.join("")
//selecting the spot in browser(Dom)

document.getElementById("underscore-string").innerHTML = underscoreString
//create event listener for the keys being pushed
document.addEventListener("keyup", function (event) {
      var key = event.key
    console.log(key)
    if (chosenWord.includes(key)) {
        alert(key + " is in the mystery word")
        //if letter is in the chosenWordArray then equal the underscorearray at the same spot to the key chosen
        for (i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === key) {
            underscoreArray[i] = key + " ";
        }
    }
     // convert it to a string using the join() method
    underscoreString = underscoreArray.join("")
    // write the string above to HTML
    document.getElementById("underscore-string").innerHTML = underscoreString;

    } else {
    // if the letter is not in the mystery word, alert
    // the user and do nothing else.
    alert(key + " is NOT in the mystery word")
    document.getElementById("wrong-letter")
    }


function wrongLetter() {
    wrongLetter.push(key)
    wrongLetterTxt.textContent = wrongLetter
    wrongCount--;
    livesTxt.textContent = wrongCount;
    console.log(wrongLetter)
    }
})  
