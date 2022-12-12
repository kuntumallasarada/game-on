
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
  cardsWonAll = [];
  choiceArray = [];
  let playerResult=document.querySelector('.playerScore');
  playerResult.textContent = 0;
  let compResult=document.querySelector('.computerScore');
  compResult.textContent = 0;
  let endResult = document.querySelector('.gameresult');

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
             setTimeout(flipcardComp,1500);
          }
        }
  }

  //flipCard function for Player

  function flipCard() {
    console.log("flipcardplayer");
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);
   
    if(cardsChosen.length == 2){
        setTimeout(checkForMatch, 1500);    
    }
  } 

  //Matching the player's cards
  function checkForMatch(){
    console.log("checkForMatchplayer")
    let cards = document.querySelectorAll('img');
    let optionOneId = cardsChosenId[0];
    let optionTwoId = cardsChosenId[1];
    let one = parseInt(optionOneId)+2;
    let two = parseInt(optionTwoId)+2;

    if(cardsChosen[0]===cardsChosen[1]){
       cardsWonPlayer.push(cardsChosen[0]);
       cardsWonAll.push(cardsChosen[0]);
       result.textContent="Found a match, find more!";
       for(let i=0;i<cards.length;i++){
       cards[i].addEventListener('click',flipCard);
       playerResult.textContent = cardsWonPlayer.length;
       }
    }
    else {      
         cards[one].setAttribute('src','images/fairy.png');
         cards[two].setAttribute('src','images/fairy.png');
         result.textContent="Missed!It's Computer's turn to play now!";
         setTimeout(flipcardComp,1500);
    }
    cardsChosen = [];
    cardsChosenId = [];
    if(cardsWonAll.length == cardArray.length/2){
         if(cardsWonPlayer.length>cardsWonComp.length)
         endResult.textContent = "Player is the winner !!!";
         else 
         endResult.textContent = "Computer is the winner!!!";
    }
   
  }
  
  //Computer's functions
     //Generating unique choice numbers
  function compCards(){
        let choiceNumber = Math.floor(Math.random()*12);
         if(choiceArray.length>0){
            let value = choiceArray.includes(choiceNumber);
            if(value===true){
                choiceNumber = Math.floor(Math.random()*12); 
         }
        }
        choiceArray.push(choiceNumber);
        if(cardsWonAll.length>0){
            for(let i=0;i<cardsWonAll.length*2;i++){
              let value1 = cardsWonAll.includes(cardArray[choiceNumber].name)
            if(value1===true){
                choiceNumber = Math.floor(Math.random()*12); 
                let value2 = choiceArray.includes(choiceNumber);
                if(value2 === true){
                    choiceNumber = Math.floor(Math.random()*12); 
             }                
            }
            choiceArray.push(choiceNumber);
        }
        }
        let  cardId = document.getElementById(choiceNumber.toString());
         computerChosen.push(cardArray[choiceNumber].name);
        computerChosenId.push(choiceNumber);
       cardId.src = cardArray[choiceNumber].img
        
  }


  //Computer's flipcard function
  function flipcardComp(){
      for(i=0;i<2;i++){
            compCards();
      }
      choiceArray = [];
  setTimeout(checkForMatchComp,2000);
}

  //Function to match Computer's cards
  function checkForMatchComp(){
      let cards = document.querySelectorAll('img');
    let optionOneId = computerChosenId[0];
    let optionTwoId = computerChosenId[1];
    let one = parseInt(optionOneId)+2;
    let two = parseInt(optionTwoId)+2;
  
    if(computerChosen[0]===computerChosen[1]){
        cards[one].setAttribute('src',cardArray[optionOneId].img);
        cards[two].setAttribute('src',cardArray[optionTwoId].img);
        cardsWonComp.push(computerChosen[0]);
        cardsWonAll.push(computerChosen[0]);
        result.textContent="Found a match, find more Computer!";
    compResult.textContent = cardsWonComp.length;
        setTimeout(flipcardComp,1500);
    }
    else {   
      
         cards[one].setAttribute('src','images/fairy.png');
         cards[two].setAttribute('src','images/fairy.png');
         result.textContent="Missed!It's Player's turn to play now!";
         for(let i=0;i<cards.length;i++){
            cards[i].addEventListener('click',flipCard);
            }
         
    }
    computerChosen = [];
    computerChosenId = [];
   if(cardsWonAll.length == cardArray.length/2){
    if(cardsWonPlayer.length>cardsWonComp.length)
    endResult.textContent = "Player is the winner !!!";
    else 
    endResult.textContent = "Computer is the winner!!!";
}
  }

  const reloadBtn = document.querySelector('.reload');
  reloadBtn.innerText = 'Restart';
  reloadBtn.style.display = 'flex'
  reloadBtn.addEventListener('click',() => {
      window.location.reload();
  })

