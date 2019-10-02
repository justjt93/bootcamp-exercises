document.addEventListener('DOMContentLoaded', () => {
  // Target text field
  const inputField = document.querySelector('.calc__input');
  const resultField = document.querySelector('.calc__result');
  // Add values // minus //
  const add = (input, result) => parseInt(input, 10) + parseInt(result, 10);
  const minus = (input, result) => parseInt(result, 10) - parseInt(input, 10);
  const multiply = (input, result) => parseInt(result, 10) * parseInt(input, 10);
  const divide = (input, result) => parseInt(result, 10) / parseInt(input, 10);
  // hold operator of latest operation
  let op = 0;
  // Clear input and result
  const clear = () => {
    inputField.value = 0;
    resultField.innerText = 0;
    op = 0;
  };
    // execute the equal operation
  const equalOP = () => {
    if (op === 0) {
      resultField.innerText = inputField.value;
    } else {
      const input = inputField.value;
      const result = resultField.innerText;
      resultField.innerText = op(input, result);
    }
  };
    // Calculate plusOP result and update it to the result text field
  const plusOP = () => {
    const input = inputField.value;
    const result = resultField.innerText;
    op = add;
    resultField.innerText = add(input, result);
  };

  // Calculate minusOP result and update it to the result text field
  const minusOP = () => {
    const input = inputField.value;
    const result = resultField.innerText;
    console.log(resultField.innerText);

    // Check if there is a value typed in the result, if it is zero just copy the value from input above and give info to OP
    if (resultField.innerText === '0') {
      resultField.innerText = inputField.value;
      op = minus;
    } else {
      equalOP();
      op = minus;
    }
  };

  // Calculate multiplyOP result and update it to the result text field
  const multiplyOP = () => {
    const input = inputField.value;
    const result = resultField.innerText;
    op = multiply;
    resultField.innerText = multiply(input, result);
  };

  // Calculate divideOP result and update it to the result text field
  const divideOP = () => {
    const input = inputField.value;
    const result = resultField.innerText;
    op = divide;
    resultField.innerText = divide(input, result);
  };

  // Click to run add operation
  document.querySelector('#btn-plus').addEventListener('click', plusOP);

  // Click to clear result and input
  document.querySelector('#btn-clear').addEventListener('click', clear);

  // Click to run equal operation
  document.querySelector('#btn-equals').addEventListener('click', equalOP);

  // Click to run mins operation
  document.querySelector('#btn-minus').addEventListener('click', minusOP);

  // Click to run equal operation
  document.querySelector('#btn-multiply').addEventListener('click', multiplyOP);

  // Click to run mins operation
  document.querySelector('#btn-divide').addEventListener('click', divideOP);
});


//   working version of calculator with divide, multiply, equal, plus, minus
