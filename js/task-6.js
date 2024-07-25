const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
const destroyBoxes = () => {
  boxesContainer.innerHTML = '';
}
const createBoxes = (amount) => {
  destroyBoxes();
  let boxesHTML = '';
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const divHTML = `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
    boxesHTML += divHTML;
    size += 10;
  }
  boxesContainer.innerHTML = boxesHTML;
}
const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};
const onBtnCreate = (event) => {
  const input = document.querySelector('[type="number"]');
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';    
  } else {
    alert('Please enter a number between 1 and 100');
  }
}
btnCreate.addEventListener('click', onBtnCreate);
btnDestroy.addEventListener('click', destroyBoxes);
