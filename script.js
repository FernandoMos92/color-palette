/**
 * Adicionando a paleta de cores.
 */
const main = document.getElementById('main-container');

const paletaDeCores = document.createElement('div');
paletaDeCores.id = 'color-palette';
main.appendChild(paletaDeCores);

// criando botão de Limpar
const btnClear = document.createElement('button');
btnClear.innerText = 'Limpar';
btnClear.classList.add('btn-clear');
main.appendChild(btnClear);

const containerTable = document.createElement('div');
containerTable.classList.add('container-table');
containerTable.id = 'pixel-board';
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

const storage = (input) => {
  if (input !== 0 && input !== String) {
    const divColorFirst = document.createElement('div');
    divColorFirst.classList.add('color');
    divColorFirst.classList.add('selected');
    divColorFirst.style.backgroundColor = 'RGB(0, 0, 0)';
    paletaDeCores.appendChild(divColorFirst);
    randomColor(input);
  }
};
storage(3);

let storageColor;
paletaDeCores.addEventListener('click', (evt) => {
  // console.log(evt.target);
  storageColor = evt.target.style.backgroundColor;
  const classSelected = evt.target.children;
  console.log(classSelected);
  // eslint-disable-next-line no-restricted-syntax
  for (const item of classSelected) {
    if (item.style.backgroundColor === storageColor) {
      item.classList.add('selected');
    } else {
      item.classList.remove('selected');
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
