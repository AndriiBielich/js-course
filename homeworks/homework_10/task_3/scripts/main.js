const form = document.createElement('form');
form.setAttribute('name', 'form');

const renderUser = (name, surname, age) => {
    const div = document.createElement('div');
    const nameField = document.createElement('p');
    nameField.innerText = `Name - ${name || 'empty name'}`;
    const surnameField = document.createElement('p');
    surnameField.innerText = `Surname - ${surname || 'empty surname'}`;
    const ageField = document.createElement('p');
    ageField.innerText = `Age - ${age}`;

    div.append(nameField, surnameField, ageField);
    document.body.appendChild(div);
}

const nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('name', 'name');
nameInput.setAttribute('placeholder', 'Enter your name.');

const surnameInput = document.createElement('input');
surnameInput.setAttribute('type', 'text');
surnameInput.setAttribute('name', 'surname');
surnameInput.setAttribute('placeholder', 'Enter your surname.');

const ageInput = document.createElement('input');
ageInput.setAttribute('type', 'number');
ageInput.setAttribute('name', 'age');
ageInput.setAttribute('placeholder', 'Your age.');
ageInput.setAttribute('min', '0');
ageInput.setAttribute('max', '120');

const submitButton = document.createElement('button');
submitButton.innerText = 'Submit';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.children?.name.value;
    const surname = e.target.children?.surname.value;
    const age = e.target.children?.age.value;
    renderUser(name, surname, age);
});

form.append(nameInput, surnameInput, ageInput, submitButton);
document.body.appendChild(form);
