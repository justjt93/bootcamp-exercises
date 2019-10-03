document.addEventListener("DOMContentLoaded", () => {


const snailTrack = document.querySelector('.snail-track');
// const snail1 = new Snail('Ron', 10, 'blue');
// snail1.mount(snailTrack);

// const snail2 = new Snail('Hermione', 12, 'red' );
// snail2.mount(snailTrack);

const snailGroup = [];

fetch('http://bootcamp.podlomar.org/api/snails/5')
.then(response => response.json())
.then(snailList => {
  for(const snail of snailList) {
    const snailComp = new Snail(snail.name, snail.velocity, snail.color);
    snailComp.mount(snailTrack);
    snailGroup.push(snailComp);
  }
});


document.addEventListener("keyup", () => {
    for(const i of snailGroup) {
        i.start();
      }
    
  });

});