export default () => {
  const menu = document.querySelector('.small-menu');
  const ul = document.querySelectorAll('.small-menu > ul');
  const timesIcon = document.querySelector('.icon > .menu-icon');
  const barIcon = document.querySelector('.bar');
  const blurAll = document.querySelectorAll('body > *:not(.small-menu)');

  barIcon.addEventListener('click', () => {
    menu.style.display = 'block';
    barIcon.style.display = 'none';
    for (let i = 0; i < blurAll.length; i += 1) {
      blurAll[i].style.filter = 'blur(5px)';
    }
  });

  timesIcon.addEventListener('click', () => {
    menu.style.display = 'none';
    barIcon.style.display = 'block';
    for (let i = 0; i < blurAll.length; i += 1) {
      blurAll[i].style.filter = '';
    }
  });

  Array.from(ul).forEach((list) => {
    list.addEventListener('click', () => {
      menu.style.display = 'none';
      barIcon.style.display = 'block';
      for (let i = 0; i < blurAll.length; i += 1) {
        blurAll[i].style.filter = '';
      }
    });
  });
};
