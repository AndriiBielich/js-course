const links = ['Main','Products','About us','Contacts'];

const ul = document.createElement('ul');

for (const link of links) {
    const li = document.createElement('li');
    li.innerText = link;
    ul.appendChild(li);
}

document.body.appendChild(ul);
