document.addEventListener('DOMContentLoaded', () => {
  const showit = () => {
    document.getElementById('hiddentext').className = 'show';
  };
  const hideit = () => {
    document.getElementById('hiddentext').className = 'hide';
  };
  document.getElementById('imglock').addEventListener('mouseenter', showit);
  document.querySelector('#imglock').addEventListener('mouseleave', hideit);
});
