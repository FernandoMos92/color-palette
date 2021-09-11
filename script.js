/**
 * Adicionando a paleta de cores.
 */
const main = document.getElementById('main-container');

document.body.addEventListener('click', (evt) => {
  console.log(evt.target.style.backgroundColor);
});

const paletaDeCores = document.createElement('div');
paletaDeCores.id = 'color-palette';
main.appendChild(paletaDeCores);
// criando botão de random color
const btnRandom = document.createElement('button');
btnRandom.innerText = 'Cor aleatória';
btnRandom.classList.add('btn-random');
btnRandom.addEventListener('click', () => {
  document.location.reload(true);
});
main.appendChild(btnRandom);
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
    createItemLine.classList.add('pixel');
    createItemLine.style.border = '1px solid black';
    createItemLine.style.width = '40px';
    createItemLine.style.height = '40px';
    createItemLine.style.background = 'rgb(255, 255, 255)';
    containerTable.appendChild(createItemLine);
    for (let coluna = 1; coluna < 5; coluna += 1) {
      const createItemCol = document.createElement('div');
      createItemCol.classList.add('pixel');
      createItemCol.style.border = '1px solid black';
      createItemCol.style.width = '40px';
      createItemCol.style.height = '40px';
      createItemLine.style.background = 'rgb(255, 255, 255)';
      containerTable.appendChild(createItemCol);
    }
  }
};
createTable();
