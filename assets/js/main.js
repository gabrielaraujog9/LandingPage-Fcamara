function passarmouse() {
  const arrowup = document.querySelector('.icon-arrow_drop_up');
  const arrowdown = document.querySelector('.icon-arrow_drop_down');
  const opcoes = document.querySelector('.opcoes');

  if (arrowdown.classList.contains('active')) {
    arrowdown.classList.remove('active');
    arrowdown.classList.add('disable');
  }
  if (arrowup.classList.contains('disable')) {
    arrowup.classList.remove('disable');
    arrowup.classList.add('active');
  }
  if (opcoes.classList.contains('disable')) {
    opcoes.classList.remove('disable');
    opcoes.classList.add('active');
  }
}

function mousefora() {
  const arrowup = document.querySelector('.icon-arrow_drop_up');
  const arrowdown = document.querySelector('.icon-arrow_drop_down');
  const opcoes = document.querySelector('.opcoes');

  if (arrowdown.classList.contains('disable')) {
    arrowdown.classList.remove('disable');
    arrowdown.classList.add('active');
  }
  if (arrowup.classList.contains('active')) {
    arrowup.classList.remove('active');
    arrowup.classList.add('disable');
  }
  if (opcoes.classList.contains('active')) {
    opcoes.classList.remove('active');
    opcoes.classList.add('disable');
  }
}

function abrir() {
  const nav = document.querySelector('.nav');
  const iconClosed = document.querySelector('.iconClosed');

  if (!nav.classList.contains('menu')) {
    nav.classList.add('menu');
    iconClosed.classList.remove('disable');
    iconClosed.classList.add('active');
  }
}
function fechar() {
  const nav = document.querySelector('.nav');
  const iconClosed = document.querySelector('.iconClosed');

  if (iconClosed.classList.contains('active')) {
    iconClosed.classList.remove('active');
    iconClosed.classList.add('disable');
    nav.classList.remove('menu');
  }
}
