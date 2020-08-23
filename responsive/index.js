const main = document.getElementsByTagName('main')[0];
const animator = document.getElementById('animator');

const ANIMATION_MARIGIN = 16 * 10;

main.addEventListener('scroll', () => {
  if (animator.offsetTop < main.scrollTop + ANIMATION_MARIGIN) {
    animator.classList.add('move');
  } else {
    animator.classList.remove('move');
  }
});
