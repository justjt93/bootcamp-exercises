// console.log('It works');

// const name = 'martin';
// console.log(name);

const acc1 = [000256784],[790];
const acc2 = [000986056],[5600];
const acc3 = [001546238],[78065];
const acc4 = [030987456],[120910];

// const acc1Balance = 790;
// const acc2Balance = 5600;
// const acc3Balance = 78065;
// const acc4Balance = 120910;

let askedAccNumber = prompt('give me an acc number');



if(askedAccNumber === '000256784') {
    document.write('Your account balance is 790 euros.');
  } 
  else {
    if(askedAccNumber === '000986056') {
        document.write('Your account balance is 5600 euros.');
    }
    else if(askedAccNumber === '001546238') {
        document.write('Your account balance is 78065 euros.');
    }
    else if(askedAccNumber === '030987456') {
        document.write('Your account balance is 120910 euros.');
    }

    else {
        alert('Accout not found, try writing the number again.');
      }
  }