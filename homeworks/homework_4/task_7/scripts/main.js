function createList(text, listSize) {
    document.write(`<ul>`);

    for (let i = 0; i < listSize; i++) {
        document.write(`<li>${text}</li>`);
    }

    document.write(`</ul>`);
}

createList('hello', 5);

