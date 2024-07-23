const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
const destroyBoxes = () => {
  boxesContainer.innerHTML = '';
}
const createBoxes = (amount) => {
  destroyBoxes();
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxesContainer.append(div);
    size += 10;
  }
}
const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
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
