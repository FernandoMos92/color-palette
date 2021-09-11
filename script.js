/**
 * Adicionando a paleta de cores.
 */
const main = document.getElementById('main-container');

const paletaDeCores = document.createElement('div');
paletaDeCores.id = 'color-palette';
main.appendChild(paletaDeCores);

const containerTable = document.createElement('div');
containerTable.classList.add('container-table');
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
    divColorFirst.style.backgroundColor = 'RGB(0, 0, 0)';
    paletaDeCores.appendChild(divColorFirst);
    randomColor(input);
  }
};
storage(3);

// Criando a tabela para pixel art.
const createTable = () => {
  for (let linha = 1; linha <= 5; linha += 1) {
    const createItemLine = document.createElement('div');
    createItemLine.style.border = '2px solid black';
    createItemLine.style.width = '6vw';
    createItemLine.style.height = '9vh';
    containerTable.appendChild(createItemLine);
    for (let coluna = 1; coluna < 5; coluna += 1) {
      const createItemCol = document.createElement('div');
      createItemCol.style.border = '2px solid black';
      createItemCol.style.width = '6vw';
      createItemCol.style.height = '9vh';
      containerTable.appendChild(createItemCol);
    }
  }
};
createTable();
