function createListFromArray(...list) {
    document.write(`<ul>`);

    for (let i = 0; i < list.length; i++) {
        document.write(`<li>${list[i]}</li>`)
    }

    document.write(`</ul>`);
}

const list = [1, 'hello', true, 2, 'world', false];
createListFromArray(list);
