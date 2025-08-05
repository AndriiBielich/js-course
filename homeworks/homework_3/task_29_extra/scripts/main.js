const letters = ['a', 'b', 'c'];

let wordWithForLoop = '';
for (let i = 0; i < letters.length; i++) {
    wordWithForLoop += letters[i];
}

let i = 0;
let wordWithWhileLoop = '';
while (i < letters.length) {
    wordWithWhileLoop += letters[i];
    i++;
}

let wordWithForOfLoop = '';
for (const letter of letters) {
    wordWithForOfLoop += letter;
}
