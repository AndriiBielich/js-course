const form = document.createElement('form');
form.setAttribute('name', 'form');

const input = document.createElement('input');
input.setAttribute('type', 'number');
input.setAttribute('name', 'age');
input.setAttribute('placeholder', 'How old are you?');
input.setAttribute('min', '0');
input.setAttribute('max', '120');

const submitButton = document.createElement('button');
submitButton.innerText = 'Submit';

form.append(input, submitButton);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const age = parseInt(e.target.children.age.value);
    const message = age < 18 ? 'You are a child' : 'You are an adult';
    alert(message);
});

document.body.appendChild(form);
