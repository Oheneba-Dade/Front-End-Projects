const btn = document.querySelector('button');
const close = document.querySelector('span');
const modal = document.querySelector('.modal');
const newCard = document.querySelector('#new');

btn.addEventListener('click', () => {
    modal.classList.add('overlay');
    newCard.style.display = 'flex';
})

close.addEventListener('click', () => {
    modal.classList.remove('overlay');
    newCard.style.display = 'none';
})