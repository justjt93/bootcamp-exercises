// const hpay = prompt('how much per hour you make');
// const hours = prompt('hours worked');
// const days = prompt('days worked');

// document.write ('Your after tax salary is '+ parseInt(hpay*hours*days*0.75));

// const hours = [2,0,5,3,0,2,4];

// console.log(hours[hours.length - 0]);

// const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
// days.push('saturday', 'sunday');
// console.log(days);

// document.write (days[0],days[2]);
// document.write (days.length);

// let chess = [
//     [5,0,0,0,0,0,0,0],
//     [0,0,0,0,0,1,0,0],
//     [0,0,0,0,0,1,0,1],
//     [0,0,0,0,0,1,1,3],
//     [0,0,0,0,0,0,1,6],
//     [0,0,0,0,3,0,2,1],
//     [0,0,0,0,0,0,0,1],
//     [0,0,0,0,0,0,6,0]
// ];

// console.log(chess);

// chess [7][1] = chess [4][7];
// chess [4][7] = 0;

// console.log(chess);

/* const ranks = ['ace', 'king', 'pokemon', 'burger'];
const suits = ['red', 'blue', 'orange', 'gray'];


let rankIndex = [Math.floor((Math.random()*4)+1)];
let suitIndex = [Math.floor((Math.random()*4)+1)];

document.write ((ranks[rankIndex]) + ' of ' + (suits[suitIndex]));
 */

// const yearBorn = prompt('Birth year');

// alert('Your age is ' + (2019- parseInt(yearBorn)));

// let rngNmb = prompt('give me a random number')

// let rankIndex = [Math.floor((Math.random()*4)+1)];
// let suitIndex = [Math.floor((Math.random()*4)+1)];

// document.write ((ranks[rankIndex]) + ' of ' + (suits[suitIndex]));

// let upperLimit = prompt('give me an upper limit');
// let downLimit = prompt('give me an down limit');

// document.write (
//     (Math.random()*(upperLimit - downLimit)) + downLimit
// );

// let password1 = prompt('give me a password');

// if(password1.length < 8) {
//     alert('Password too short');
//   } else {
//       let  password2 = prompt('repeat password');

//       if(password1 != password2){
//         alert('Password do not match');
// }
// }

// if(age < 6) {
//     alert('Your price is 0 euro');
//   }
//   else {
//     let diff = 18 - age;
//     if(diff === 1) {
//       alert('Wait for a year and you are good to go.');
//     }
//     else if(diff <= 5) {
//       alert('Well, you'll just have to grow up a bit.');
//     }
//     else {
//       alert('You are so young, you shouldn't even be on the internet yet!');
//     }
//   }


// ..........................Morning workout sollution......................................


// const askedAccNumber = prompt('give me an acc number');
// const action = prompt('Balance or Withdraw');

// if (action === 'balance') {
//   if (askedAccNumber === '000256784') {
//     document.write('Your account balance is 790 euros.');
//   } else if (askedAccNumber === '000986056') {
//     document.write('Your account balance is 5600 euros.');
//   } else if (askedAccNumber === '001546238') {
//     document.write('Your account balance is 78065 euros.');
//   } else if (askedAccNumber === '030987456') {
//     document.write('Your account balance is 120910 euros.');
//   } else {
//     alert('Accout not found, try writing the number again.');
//   }
// } else if (action === 'withdraw') {
//   const withdrawAmmount = prompt('How much woud you like to withdraw?');
//   if (askedAccNumber === '000256784' && withdrawAmmount < 790) {
//     document.write(`Your account balance is${790 - withdrawAmmount} euro`);
//   } else if (askedAccNumber === '000986056' && withdrawAmmount < 5600) {
//     document.write(`Your account balance is${5600 - withdrawAmmount}euros`);
//   } else if (askedAccNumber === '001546238' && withdrawAmmount < 78065) {
//     document.write(`Your account balance is${78065 - withdrawAmmount}euros`);
//   } else if (askedAccNumber === '030987456' && withdrawAmmount < 120910) {
//     document.write(`Your account balance is${120910 - withdrawAmmount}euros`);
//   } else {
//     alert('Insufficient funds');
//   }


// //   document.write('You withdrew all the money');
// } else {
//   alert('Unknown command do not know what to do');
// }
// const roll = () => Math.floor(Math.random() * 6) + 1;

// const triangleArea = (w, h) => w * h / 2;

// const square = (n) => n * n;

// const hypotenuse = (a, b) => Math.sqrt(square(a) + square(b));


// const salary = (pay, hours, days) => pay * hours * days;

// const taxedSalary = (salary, tax) => salary - (salary * (tax / 100));


// const nidIsValid = (nid) => {
//     const intNID = parseINT (nid, 10);

//     if (Number.isNaN(intNID)){
//       return false;
//   }

//   if (nid % 11 === 0){
//       return false;
//   }

// };


// (nid.toString()).length === 10) {
//     if (nid % 11 === 0) {
//       const month = parseInt(nid.slice(2, 4));
//     }
//     return 'Almost fits';
//   }
//   return 'Does not fit';

// const makeItRed = () => {
//   document.getElementById('body').className = 'red';
// };

// const makeItReadable = () => {
//   document.getElementById('title').className = 'white';
// };

// document.addEventListener('DOMContentLoaded', () => {
//   makeItRed();
//   makeItReadable()
// });


// const changeSide = () => {
//   const currentSideNumber = 0;
//   //   const sideNumber = Math.floor((Math.random() * 6) + 1);
//   const sideNumber = currentSideNumber + 1;


//   document.getElementById('body').className = `side${parseInt(sideNumber, 10) + 1}`;
// };

// document.addEventListener('click', () => {
//   changeSide();
// });


// DICE ROLL class change

// let currentSideNumber = 0;

// let arr = [];

// for (let x = 1; x < 7; x++) {
//   arr.push(`side${x}`);
// }
// console.log(arr)

// const changeSide = () => {
//   document.getElementById('body').className = arr[currentSideNumber];
//   currentSideNumber++;

// };

// document.addEventListener('click', () => {
//   changeSide();
// });


/* ________________LOGIN PAGE CVICENI_____________

const userNames = ['Pepa', 'Alik', 'Bohumil'];
const passwords = ['123', 'mama', 'bourak'];

const userNameCheck = () => {
  const userNameInput = document.querySelector('#username').value;
  const passwordInput = document.querySelector('#password').value;
  const usernameArrayPosition = userNames.indexOf(userNameInput);
  const passwordArrayPosition = passwords.indexOf(passwordInput);

  if (userNames.indexOf(userNameInput) < 0) {
    document.write('User does not exist');
  } else if (usernameArrayPosition === passwordArrayPosition) {
    document.write('login test passed');
  } else {
    document.write('password incorrect');
  }
  console.log(userNameCheck);
};

document.addEventListener('DOMContentLoaded', () => {
  const checkUserStatus = document.getElementById('check');
  checkUserStatus.addEventListener('click', userNameCheck);
});
_________________________________________________________ */

// ______________DICE ROLL MASTER KUNG-FOO EXCERCISE___________

// const changeSide = () => {
//   const sideNumber = Math.floor((Math.random() * 6) + 1);

//   document.getElementById('body').className = `side${parseInt(sideNumber, 10)}`;
// };

// document.addEventListener('click', () => {
//   changeSide();
// });

// -----below is the working version-----
// const sides = ['1', '2', '3', '4', '5', '6'];

// const changeSide = () => {
//   const sideNumber = Math.floor((Math.random() * 6) + 1);

//   document.getElementById('dice1').className = `side${parseInt(sideNumber, 10)}`;
// };

// const changeSide2 = () => {
//   const sideNumber = Math.floor((Math.random() * 6) + 1);

//   document.getElementById('dice2').className = `side${parseInt(sideNumber, 10)}`;
// };

// const changeSide3 = () => {
//   const sideNumber = Math.floor((Math.random() * 6) + 1);

//   document.getElementById('dice3').className = `side${parseInt(sideNumber, 10)}`;
// };

// const rollAll = () => {
//   changeSide();
//   changeSide2();
//   changeSide3();
// };

// document.getElementById('dice1').addEventListener('click', () => {
//   changeSide();
// });
// document.getElementById('dice2').addEventListener('click', () => {
//   changeSide2();
// });
// document.getElementById('dice3').addEventListener('click', () => {
//   changeSide3();
// });

// document.getElementById('rollall').addEventListener('click', () => {
//   rollAll();
// });

// ------------------DICE ADD BY ONE ------------------

// let side = 3;

// document.addEventListener('DOMContentLoaded', () => {
//   const dice = document.querySelector('#dice');
//   dice.src = `img/side${side}.png`;

//   dice.addEventListener('click', () => {
//     if (side < 6) {
//       side++;
//     } else {
//       side = 1;
//     }

//     dice.src = `img/side${side}.png`;
//   });
// });
// ------------------------------------------------------
// ---------------------STAGE 2 sollution ----------------
// const roll = () => Math.floor(Math.random() * 6) + 1;
// const rollAll = () => {
//   updateFace(0, roll());
//   updateFace(1, roll());
//   updateFace(2, roll());
// };


// const updateFace = (diceIdx, faceValue) => {
//   const dice = document.querySelector(`#dice${diceIdx}`);
//   dice.src = `img/side${faceValue}.png`;
// };

// document.addEventListener('DOMContentLoaded', () => {
//   document.body.addEventListener('keypress', () => {
//     rollAll();
//   });

//   const dice0 = document.querySelector('#dice0');
//   const dice1 = document.querySelector('#dice1');
//   const dice2 = document.querySelector('#dice2');

//   dice0.addEventListener('click', () => {
//     updateFace(0, roll());
//   });

//   dice1.addEventListener('click', () => {
//     updateFace(1, roll());
//   });

//   dice2.addEventListener('click', () => {
//     updateFace(2, roll());
//   });
// });
// ---------------------------------------------------
// -----------------Final stage----------------------

const roll = () => Math.floor(Math.random() * 6) + 1;
const rollAll = () => {
  const dice0 = document.querySelector('#dice0');
  const dice1 = document.querySelector('#dice1');
  const dice2 = document.querySelector('#dice2');

  updateFace(dice0, roll());
  updateFace(dice1, roll());
  updateFace(dice2, roll());
};

const handleDice = (event) => {
  updateFace(event.target, roll());
};

const updateFace = (dice, faceValue) => {
  dice.src = `img/side${faceValue}.png`;
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('keypress', () => {
    rollAll();
  });

  const dice0 = document.querySelector('#dice0');
  const dice1 = document.querySelector('#dice1');
  const dice2 = document.querySelector('#dice2');

  dice0.addEventListener('click', handleDice);
  dice1.addEventListener('click', handleDice);
  dice2.addEventListener('click', handleDice);
});
