const MAX_STEPS = 100;
const STEP = 2;

for (let i = 0; i < MAX_STEPS; i+= STEP) {
    console.log(`Current step - ${i}`);
    document.write(`<h2>Current step is - ${i}</h2>`);
}
