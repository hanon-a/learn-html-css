const flip = document.querySelector('.flip-button');
const card = document.querySelector('.card');

flip.addEventListener('click', () => {
  card.classList.toggle('is-flipped');
});
