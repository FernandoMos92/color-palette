const main = document.getElementById('main-container');

const colors = {
  NeutralWhite: '#FFFFFF',
  NeutralBlack: '#000000',
};

const paletaDeCores = document.createElement('div');
paletaDeCores.id = 'color-palette';
main.appendChild(paletaDeCores);

const containerBoard = document.createElement('div');
containerBoard.classList.add('container-board');
containerBoard.id = 'pixel-board';

const clearButton = document.createElement('button');
clearButton.innerText = 'Clear';
clearButton.classList.add('btn-clear');
clearButton.id = 'clear-board';
clearButton.addEventListener('click', () => {
  const tilesList = containerBoard.children;
  for (let index = 0; index < tilesList.length; index += 1) {
    tilesList[index].style.backgroundColor = colors.NeutralWhite;
  }
});
main.appendChild(clearButton);
main.appendChild(containerBoard);

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

let storageColor = colors.NeutralBlack;
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

const dinamicBoard = (input) => {
  const pixelDefault = 42;
  for (let index = 1; index <= input * input; index += 1) {
    const createItem = document.createElement('div');
    createItem.classList.add('pixel');
    createItem.addEventListener('click', changeColor);
    containerBoard.appendChild(createItem);
    containerBoard.style.width = `${pixelDefault * input}px`;
  }
};

const validCreate = (input) => {
  if (input === '') {
    return alert('Board inválido!');
  }
  if (input <= 5) {
    dinamicBoard(5);
  } else if (input > 50) {
    dinamicBoard(50);
  } else {
    dinamicBoard(input);
  }
};

window.onload = () => {
  dinamicBoard(5);
  const storage = (input) => {
    if (input !== 0 && input !== String) {
      const divColorFirst = document.createElement('div');
      divColorFirst.classList.add('color');
      divColorFirst.classList.add('selected');
      divColorFirst.style.backgroundColor = colors.NeutralBlack;
      paletaDeCores.appendChild(divColorFirst);
      randomColor(input);
    }
  };
  storage(3);
};

const inputSize = document.createElement('input');
const btnVQV = document.createElement('button');
const containerInput = document.createElement('div');
inputSize.id = 'board-size';
inputSize.name = 'Select board size';
inputSize.type = 'number';
inputSize.min = 5;
inputSize.max = 50;
inputSize.value = 5;
btnVQV.id = 'generate-board';
btnVQV.innerText = '#VQV';

inputSize.style.borderRadius = '5px 0 0 5px';
btnVQV.style.borderRadius = '0 5px 5px 0';

containerInput.appendChild(inputSize);
containerInput.appendChild(btnVQV);
containerInput.style.marginLeft = '44%';
containerInput.style.marginRigth = '45%';

main.insertBefore(containerInput, containerBoard);

btnVQV.addEventListener('click', () => {
  containerBoard.innerHTML = '';
  validCreate(inputSize.value);
});
