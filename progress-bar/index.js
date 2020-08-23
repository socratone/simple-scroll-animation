const main = document.getElementsByTagName('main')[0];
const progressBarPercent = document.getElementById('progress-bar-percent');

main.addEventListener('scroll', () => {
  const { scrollHeight, offsetHeight, scrollTop } = main;
  const scrollRange = scrollHeight - offsetHeight;
  const scrollPercent = Math.round((scrollTop / scrollRange) * 100);
  progressBarPercent.style.width = `${scrollPercent}%`;
});
