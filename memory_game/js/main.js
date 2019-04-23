console.log("Up and running!");
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
          console.log("You found a match!");
      } else {
          console.log("Sorry, try again.");
        }
  };

  function flipCard() {
    var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
 this.setAttribute('src', cards[cardId].cardImage);
 if (cardsInPlay.length === 2){
    checkForMatch();
 };
};

console.log(cardsInPlay);