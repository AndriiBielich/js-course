function createList(text) {
    const LIST_SIZE = 3;
    document.write('<ul>');

    for (let i = 0; i < LIST_SIZE; i++) {
        document.write(`<li>${text}</li>`);
    }

    document.write('</ul>');
}

createList('hello');
