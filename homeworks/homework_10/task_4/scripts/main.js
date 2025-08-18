const amount = document.querySelector('#amount');

const LS_NAME = 'item';

window.addEventListener('beforeunload', (e) => {
    const value = localStorage.getItem(LS_NAME) || amount.innerText;
    localStorage.setItem(LS_NAME, `${parseInt(value) + 1}`);
});

window.addEventListener('load', () => {
    amount.innerText = localStorage.getItem(LS_NAME) || amount.innerText;
});
