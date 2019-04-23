console.log("Up and running!");
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo)
console.log("User flipped " + cardTwo);

function checkForMatch() {
  //if (cardsInPlay.length == 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
          alert("You found a match!");
          //setTimeout('location', 50000);
        //location.reload()

      } else {
          alert("Sorry, try again");
        };

  };