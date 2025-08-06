const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
    { id: 4, name: "Diana", age: 28 },
    { id: 5, name: "Ethan", age: 35 },
    { id: 6, name: "Fiona", age: 27 },
    { id: 7, name: "George", age: 24 },
    { id: 8, name: "Hannah", age: 31 },
    { id: 9, name: "Ian", age: 29 },
    { id: 10, name: "Julia", age: 26 }
];

function printUsers(users) {
    document.write(`<div class='cards-container'>`);

    for (const user of users) {
        document.write(`
        <div class='user-card'>
          <p>Id: ${user.id}</p>
          <p>Name - ${user.name}</p>
          <p>Age - ${user.age}</p>
        </div>
    `);
    }

    document.write(`</div>`);
}

printUsers(users);
