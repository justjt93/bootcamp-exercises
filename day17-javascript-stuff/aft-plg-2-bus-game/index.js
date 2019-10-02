// class Game {
//     constructor(chipNumber){
//         this.chipNumber = chipNumber;
//         this.score = 0;
//         this.finished = false;
//     }
//     addChip(value,x,y){
//         const newChip = new Chip(value,x,y);
//             // add chip to the board use chip constructor?
//     };
// }

// class Chip {
//     constructor(value, posX, posY){
//         this.value = value;
//         this.posX = posX;
//         this.posY = posY;
//         this.found = 0;
//     }

//     render(){
//         if (this.found === 1) {
//             // change the style to display none
//         }
//     }   
// };
const addBtn = document.querySelector('#addChip');
const resetBtn = document.querySelector('#resetGame');
const scoreKeeper = document.querySelector('#scoreKeeper');

let score = 0;

const resetChips = () => {
    const boardElm = document.querySelector('.board');
    score = 0;
    scoreKeeper.textContent = (
        `Score:${score}`
    );
    boardElm.innerHTML= (
        ``
      );
}


const addChip = () => {
            const boardElm = document.querySelector('.board');
            const chipElm = document.createElement('span');
            chipElm.style.top = parseInt( 70 * Math.random() + 15) + "%" ;
            chipElm.style.left = parseInt(90 * Math.random() ) + "%" ;
            let valueOfChip = parseInt(Math.floor( 3 * Math.random() +1));
            chipElm.className = `chip${valueOfChip} valueListener`;

            chipElm.textContent = (
                valueOfChip
            );
            chipElm.addEventListener('click', (event) => {
                score= score + valueOfChip;
                scoreKeeper.textContent = (
                    `Score:${score}`
                );
            chipElm.style.display = "none";
            });
            boardElm.appendChild(chipElm);
        }

document.addEventListener('DOMContentLoaded', () => {
    addBtn.addEventListener('click', (addChip));
    resetBtn.addEventListener('click', (resetChips));
  });