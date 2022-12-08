class player{
    constructor(name,dice){
       this.name = name;
       this.dice = dice;
    }
}
let player1 = new player("Leo",0);
let player2 = new player("Computer",0) 

// Roll a dice function
const result=document.querySelector('.diceresult');
const rollDice = ()=>{
    player1.dice = Math.floor(Math.random()*6)+1;
    player2.dice = Math.floor(Math.random()*6)+1;

    if(player1.dice>player2.dice)
    {
      result.textContent="You won the dice and will be the first to play";  
    }
    else{
        result.textContent="Computer won the dice and will be the first to play";
    }

}


// making the grid 
document.addEventListener('DOMContentLoaded',() => {
    //memory cards
    const cardArray = [
     {
         name: 'fawn',
         img: 'images/fawn.png'
     },
     {
         name: 'fawn',
         img: 'images/fawn.png'
     },
     {
         name: 'iridessa',
         img: 'images/iridessa.png'
     },
     {
         name: 'iridessa',
         img: 'images/iridessa.png'
     },
     {
         name: 'rosetta',
         img: 'images/rosetta.png'
     },
     {
         name: 'rosetta',
         img: 'images/rosetta.png'
     },
     {
         name: 'silvermist',
         img: 'images/silvermist.png'
     },
     {
         name: 'silvermist',
         img: 'images/silvermist.png'
     },
     {
         name: 'tinkerbell',
         img: 'images/tinkerbell.png'
     },
     {
         name: 'tinkerbell',
         img: 'images/tinkerbell.png'
     },
     {
         name: 'vidia',
         img: 'images/vidia.png'
     },
     {
         name: 'vidia',
         img: 'images/vidia.png'
     }
  ]
  //shuffling the card array
  // cardArray.sort(() => 0.5 - Math.random())

for (let i = cardArray.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = cardArray[i];
  cardArray[i] = cardArray[j];
  cardArray[j] = k;
}
  
 
  const container = document.querySelector('.container');
  cardsChosen = [];
  cardsChosenId = [];
  cardsWon = [];
  //create your board
  function createBoard(){
     for(let i=0;i<cardArray.length;i++){
         var card = document.createElement('img');
         card.setAttribute('src','images/fairy.png');
         card.setAttribute('data-id',i);
         card.addEventListener('click',flipCard);
         container.appendChild(card);
     }
  }

  //Check for Matches
//   function checkForMatch(){
//     var cards = document.querySelectorAll('img');
//     const optionOneId = cardsChosenId[0];
//     const optionTwoId = cardsChosenId[1];
//     if(cardsChosen[0]===cardsChosen[1]){
//         cards[optionOneId].setAttribute('src',cardArray[])
//     }
//   }

  //flipCard function

  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);
    // if(cardsChosen.length === 2){
    //     setTimeout(checkForMatch, 500);
    // }
  } 

  createBoard();
 
 })
