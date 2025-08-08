const suits = ['heart', 'clubs', 'diamond', 'spade'];
const values = ['6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const colors = ['red', 'black'];

const deck = [];
suits.forEach((suit, index) => {
    for (const value of values) {
        deck.push({
            cardSuit: suit,
            value,
            color: index % 2 === 0 ? colors[0] : colors[1]
        })
    }
});

const reduceDeck = deck.reduce((acc, value) => {
    acc[value.cardSuit] = acc[value.cardSuit] ? acc[value.cardSuit] : [];
    acc[value.cardSuit].push(`${value.value} ${value.cardSuit}`);
    return acc;
}, {});
