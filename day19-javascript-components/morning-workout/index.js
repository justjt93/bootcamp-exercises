document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const timer1 = new Timer(10, 'red');
  timer1.mount(app);
  const timer2 = new Timer(80, 'green');
  timer2.mount(app);

});
