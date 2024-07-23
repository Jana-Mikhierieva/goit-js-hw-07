function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnColor = document.querySelector('.change-color');
const textColor = document.querySelector('.color');
const body = document.body;
const onBtnClick = () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  textColor.textContent = randomColor;
}
btnColor.addEventListener('click', onBtnClick);