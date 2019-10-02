class Game {
    constructor(chipNumber){
        this.chipNumber = chipNumber;
        this.score = 0;
    }
    addChips(x){
        for (let i = 0; i < x; i++) {
            const boardElm = document.querySelector('.board');
            this.chipElm = document.createElement('span');
            this.chipElm.style.top = parseInt( 70 * Math.random() + 15) + "%" ;
            this.chipElm.style.left = parseInt(90 * Math.random() ) + "%" ;
            let valueOfChip = parseInt(Math.floor( 3 * Math.random() +1));
            this.chipElm.className = `chip${valueOfChip} valueListener`;

            this.chipElm.textContent = (
                valueOfChip
            );
            this.chipElm.addEventListener('click', () => {
                const scoreKeeper = document.querySelector('#scoreKeeper');
                this.score= this.score + valueOfChip;
                scoreKeeper.textContent = (
                    `Score:${this.score}`
                );
                event.target.style.display = "none";
            });
            boardElm.appendChild(this.chipElm);
          }
        };
        
    resetGame() {    
    const scoreKeeper = document.querySelector('#scoreKeeper');
    const boardElm = document.querySelector('.board');
    this.score = 0;
    scoreKeeper.textContent = (
        `Score:${this.score}`
    );
    boardElm.innerHTML= (``);
        }

    throwChips() {    
        const userInput = document.querySelector('#inputChips');
        const userInputChips = parseInt(userInput.value);
        this.score = 0;
        console.log(userInputChips);
        this.addChips(userInputChips);
            }

}

const startBtn = document.querySelector('#startGame');
const resetBtn = document.querySelector('#resetGame');
const scoreKeeper = document.querySelector('#scoreKeeper');


document.addEventListener('DOMContentLoaded', () => {
    const game20 = new Game();
    game20.addChips(40);
    startBtn.addEventListener('click', (game20.throwChips));
    resetBtn.addEventListener('click', (game20.resetGame));
  });