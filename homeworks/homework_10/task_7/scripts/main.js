const POUNDS_PER_KG = 2.20462;

const kgInput = document.querySelector('#kgInput');
const response = document.querySelector('#response');

kgInput.addEventListener('input', (event) => {
   const { value } = event.target;
   response.innerText = value ? `In ${value} kg - ${(parseInt(value) * POUNDS_PER_KG).toFixed(2)} pounds` : '';
});
