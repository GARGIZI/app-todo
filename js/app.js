const btnAdd = document.querySelector('.btn-add');
const fillingBlock = document.querySelector('.addBlock');
const overlay = document.querySelector('.overlay');
const blockChange = document.querySelector('.blockInner');

btnAdd.addEventListener('click', function() {
  fillingBlock.classList.add('active');
  overlay.classList.add('active');
});

overlay.addEventListener('click', function() {
  fillingBlock.classList.remove('active');
  overlay.classList.remove('active');
  blockChange.classList.remove('active');
});

const btnCompleted = document.querySelector('.btn-completed');
const block = document.querySelector('.todo__block');
block.remove();

function deleteBlock() {
  this.parentElement.remove();
}

function showText() {
  this.lastElementChild.previousElementSibling.firstElementChild.classList.toggle('active');
}

function addBlock() {
  const copyElement = block.cloneNode(true);
  const heading = copyElement.querySelector('.todo__block-heading p');
  const text = copyElement.querySelector('.todo__block-text p');
  const deleteIcon = copyElement.querySelector('.todo__block-deleteIcon');
  const box = document.querySelector('.todo__box');

  // values 
  let headingValue = document.querySelector('.addBlock__inputHeading input').value;
  let textValue = document.querySelector('.addBlock__inputText textarea').value;

  heading.innerHTML = headingValue;
  text.textContent = textValue;

  box.prepend(copyElement);
  

  deleteIcon.addEventListener('click', deleteBlock);
  copyElement.addEventListener('click', showText);

  fillingBlock.classList.remove('active');
  overlay.classList.remove('active');

  this.parentElement.firstElementChild.firstElementChild.value = '';
  this.parentElement.firstElementChild.nextElementSibling.firstElementChild.value = '';
}

btnCompleted.addEventListener('click', addBlock);