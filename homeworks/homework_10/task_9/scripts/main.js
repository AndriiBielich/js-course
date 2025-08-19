const form = document.querySelector("#form");
const table = document.querySelector('#table');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const {rows, columns, content} = e.target;
    table.innerHTML = '';
    const rowsAmount = +rows.value;
    const columnsAmount = +columns.value;

    for (let i = 0; i < rowsAmount; i++) {
        const tr = document.createElement('tr');
        for(let j = 0; j < columnsAmount; j++) {
            const td = document.createElement('td');
            td.innerText = content.value;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
});
