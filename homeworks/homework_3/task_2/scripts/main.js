const phrases = [
    "Good morning",
    "Be yourself",
    "Keep going",
    "Stay strong",
    "Try again",
    "Never quit",
    "Be kind",
    "Stay focused",
    "Think big",
    "Dream more"
];

for (let i = 0; i < phrases.length; i++) {
    document.write(
        `<div>
            <h3>Index - ${i}</h3>
            <p>${phrases[i]}</p>
        </div>`
    );
}
