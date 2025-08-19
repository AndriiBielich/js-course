const ARR_SIZE = 100;
const OFFSET = 10;
const maxPageSize = ARR_SIZE / OFFSET;
let currentPage = 0;

const container = document.querySelector('#container');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

const renderContent = (startIndex, endIndex, collection) => {
    container.innerHTML = '';

    for (let i = startIndex; i < endIndex; i++) {
        const div = document.createElement('div');
        const id = document.createElement('p');
        const title = document.createElement('h2');
        title.innerText = `Title: ${collection[i].title}`;
        id.innerText = `ID: ${collection[i].id}`;
        const description = document.createElement('p');
        description.innerText = `Description: ${collection[i].description}`;

        div.append(title, id, description);
        container.append(div);
    }
}

const items = [];

for (let i = 0; i < ARR_SIZE; i++) {
    items.push({
        id: i + 1,
        title: `Title ${i + 1}`,
        description: `Description ${i + 1}`,
    })
}

renderContent(currentPage * OFFSET, currentPage * OFFSET + OFFSET, items);


prevBtn.addEventListener('click', (e) => {
    currentPage--;

    if (currentPage <= 0) {
        currentPage = 0;
        return;
    }

    renderContent(currentPage * OFFSET - OFFSET, currentPage * OFFSET, items);
});

nextBtn.addEventListener('click', (e) => {
    currentPage++;

    if (currentPage >= maxPageSize) {
        currentPage = maxPageSize;
        return;
    }

    renderContent(currentPage * OFFSET, currentPage * OFFSET + OFFSET, items);
});
