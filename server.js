
class player{
    constructor(name,dice){
       this.name = name;
       this.dice = dice;
    }
}
let player1 = new player("Leo",0);
let player2 = new player("Computer",0) 
let diceCount=0;
// Roll a dice function
const result=document.querySelector('.diceresult');
function rollDice(){
    player1.dice = Math.floor(Math.random()*6)+1;
    player2.dice = Math.floor(Math.random()*6)+1;

    if(player1.dice>player2.dice)
    {
      result.textContent="You won the dice and will be the first to play"; 
      diceCount = 1;
      createBoard();
    }
    else{
        result.textContent="Computer won the dice and will be the first to play";
        diceCount = 2;
        createBoard();
    }
    
}


//document.addEventListener('DOMContentLoaded',() => {

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
    //declarations
  const container = document.querySelector('.container');
  cardsChosen = [];
  cardsChosenId = [];
  computerChosen = [];
  computerChosenId = [];
  cardsWonPlayer = [];
  cardsWonComp = [];

  //create your board
  function createBoard(){
     for(let i=0;i<cardArray.length;i++){
         var card = document.createElement('img');
         card.setAttribute('src','images/fairy.png');
         card.setAttribute('data-id',i);
         card.id =i
         container.appendChild(card);    
     
     if(diceCount==1){
        card.addEventListener('click',flipCard);
        }
         if(diceCount==2 && i==11){
             flipcardComp();
          }
        }
  }

  //flipCard function

  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);
    if(cardsChosen.length == 2){
        setTimeout(checkForMatch, 1500);    
    }
  } 

  //Check for Matches
  function checkForMatch(){
    let cards = document.querySelectorAll('img');
    let optionOneId = cardsChosenId[0];
    let optionTwoId = cardsChosenId[1];
    let one = parseInt(optionOneId)+1;
    let two = parseInt(optionTwoId)+1;

    if(cardsChosen[0]===cardsChosen[1]){
       cardsWonPlayer.push(cardsChosen);
    }
    else {      
         cards[one].setAttribute('src','images/fairy.png');
         cards[two].setAttribute('src','images/fairy.png');
         alert("It's computer's turn to play");
    }
    cardsChosen = [];
    cardsChosenId = [];
    console.log(cardsWonPlayer)
  }
  function compCards(){
        const choiceNumber = Math.floor(Math.random()*12);
        let  cardId = document.getElementById(choiceNumber.toString());
         computerChosen.push(cardArray[choiceNumber].name);
        computerChosenId.push(choiceNumber);
       cardId.src = cardArray[choiceNumber].img
  }

  //Computer playing
  function flipcardComp(){
      for(i=0;i<2;i++){
            compCards();
      }
  setTimeout(checkForMatchComp,2000);
}

  //Check for Matches --- Computer Playing
  function checkForMatchComp(){
    let cards = document.querySelectorAll('img');
    let optionOneId = computerChosenId[0];
    let optionTwoId = computerChosenId[1];
    let one = parseInt(optionOneId)+1;
    let two = parseInt(optionTwoId)+1;
  
    if(computerChosen[0]===computerChosen[1]){
        cards[one].setAttribute('src',cardArray[optionOneId].img);
        cards[two].setAttribute('src',cardArray[optionTwoId].img);
        cardsWonComp.push(computerChosen);
    }
    else {   
      
         cards[one].setAttribute('src','images/fairy.png');
         cards[two].setAttribute('src','images/fairy.png');
    }
    computerChosen = [];
    computerChosenId = [];
  }

 
 
//  })
