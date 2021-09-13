/**
 * Adicionando a paleta de cores.
 */
const main = document.getElementById('main-container');

const paletaDeCores = document.createElement('div');
paletaDeCores.id = 'color-palette';
main.appendChild(paletaDeCores);

const containerTable = document.createElement('div');
containerTable.classList.add('container-table');
containerTable.id = 'pixel-board';

// criando botão de Limpar
const btnClear = document.createElement('button');
btnClear.innerText = 'Limpar';
btnClear.classList.add('btn-clear');
btnClear.id = 'clear-board';
btnClear.addEventListener('click', () => {
  const tilesList = containerTable.children;
  for (let index = 0; index < tilesList.length; index += 1) {
    tilesList[index].style.backgroundColor = '#FFFFFF';
  }
});
main.appendChild(btnClear);
main.appendChild(containerTable);

// Criando Randomicamente as cores para a paleta de cores.
const randomColor = (input) => {
  for (let index = 0; index < input; index += 1) {
    const divColor = document.createElement('div');
    divColor.style.backgroundColor = `RGB(
    ${Math.floor(Math.random() * (255 - 0) + 1)},
    ${Math.floor(Math.random() * (255 - 0) + 1)},
    ${Math.floor(Math.random() * (255 - 0) + 1)})`;
    divColor.classList.add('color');
    paletaDeCores.appendChild(divColor);
  }
};

window.onload = () => {
  const storage = (input) => {
    if (input !== 0 && input !== String) {
      const divColorFirst = document.createElement('div');
      divColorFirst.classList.add('color');
      divColorFirst.classList.add('selected');
      divColorFirst.style.backgroundColor = 'rgb(0, 0, 0)';
      paletaDeCores.appendChild(divColorFirst);
      randomColor(input);
    }
  };
  storage(3);
};

let storageColor = 'rgb(0, 0, 0)';
paletaDeCores.addEventListener('click', (evt) => {
  storageColor = evt.target.style.backgroundColor;
  const classSelected = evt.currentTarget.children;

  for (let index = 0; index < classSelected.length; index += 1) {
    const item = classSelected[index];
    item.classList.remove('selected');
    if (
      item.style.backgroundColor === storageColor && classSelected[index] !== 'color selected'
    ) {
      item.classList.add('selected');
    }
  }
});

const changeColor = (e) => {
  e.target.style.backgroundColor = storageColor;
};

// Criando a tabela para pixel art.
const createTable = () => {
  for (let linha = 1; linha <= 25; linha += 1) {
    const createItem = document.createElement('div');
    createItem.classList.add('pixel');
    createItem.addEventListener('click', changeColor);
    containerTable.appendChild(createItem);
  }
};
createTable();
