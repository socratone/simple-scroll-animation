const main = document.getElementsByTagName('main')[0];
const animator = document.getElementById('animator');

const ANIMATION_MARIGIN = 16 * 10;

const scrollResponsiveAnimation = () => {
  if (animator.offsetTop < main.scrollTop + ANIMATION_MARIGIN) {
    animator.classList.add('move');
    main.removeEventListener('scroll', scrollResponsiveAnimation);
  }
};
main.addEventListener('scroll', scrollResponsiveAnimation);
