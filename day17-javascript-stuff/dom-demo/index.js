const shoppingList = [
  ['apples', '1kg', false],
  ['bacon', '200g', false],
  ['cheddar', '250g', false],
  ['beer', '6', false],
  ['icecream', '1kg', false],
];

document.addEventListener('DOMContentLoaded', () => {

  for (const item of shoppingList) {
  const listElm = document.querySelector('.shopping-list');
  const shopElm = document.createElement('div');
  shopElm.className = `shopping-list__item`;
  shopElm.innerHTML = (
    `<span>${item[0]}</span>
    <span>${item[1]}</span>
    <span class="tickbox"></span>`
  );

  shopElm.querySelector('.tickbox').addEventListener('click', (event) => {
    if (item[2] === false){
      event.target.textContent = '✓';
      item[2] = true;
    } else {
      event.target.textContent = '';
      item[2] = false;
    }
  });

  listElm.appendChild(shopElm);
};


})

