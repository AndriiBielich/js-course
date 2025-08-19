const sessionList = JSON.parse(localStorage.getItem("sessionList")) || [];

for (const session of sessionList) {
    const p = document.createElement("p");
    p.innerText = `Page was visited at ${session}`;
    document.body.appendChild(p);
}
