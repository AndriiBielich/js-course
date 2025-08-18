const textDiv = document.createElement('div');
textDiv.setAttribute('id', 'text');

const button = document.createElement('button');
button.innerText = 'Hide text block';
button.addEventListener('click', () => {
    textDiv.style.display = 'none';
});

document.body.append(textDiv, button);
