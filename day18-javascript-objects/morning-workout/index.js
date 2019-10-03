document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.querySelector('#plus');
  const removeBtn = document.querySelector('#minus');
  const knob = document.querySelector('#knob');

  let counterDigit = Math.floor(20* Math.random());
  let counterMax = 20;

  const update = () => {
    const counter = document.querySelector('#counter');
    counter.textContent =`${counterDigit}`;

    const maximum = document.querySelector('#maximum');
    maximum.textContent =`${counterMax}`;
    knob.style.width =`${(counterDigit / counterMax)*100}%`;
  }

  const oneUp = () => {
    if(counterDigit >= counterMax){
      alert('too much');
    }else{
    counterDigit++;
    update();
    }
  }

  const oneDown = () => {
    if(counterDigit <= 0){
      alert('too little');
    }else{
    counterDigit--;
    update();
    }
  }
  update();
addBtn.addEventListener('click', (oneUp));
removeBtn.addEventListener('click', (oneDown));
});