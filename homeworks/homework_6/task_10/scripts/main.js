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

const getIndex = (arr, value) => arr.indexOf(value);

//1 found spade ace
const spadeAce = deck.find((card) => card.cardSuit === suits[getIndex(suits, 'spade')] && card.value === values[getIndex(values, '8')]);

//2 all cards with value 6
const allSix = deck.filter((card) => card.value === values[getIndex(values, '6')]);

//3 found all red cards
const redCards = deck.filter((card) => card.color === colors[getIndex(colors, 'red')]);

//4 found all diamonds
const diamondCards = deck.filter((card) => card.cardSuit === suits[getIndex(suits, 'diamond')]);

//5 all clubs more than 8
const clubsCards = deck.filter((card) => card.cardSuit === suits[getIndex(suits, 'clubs')])
                             .slice(getIndex(values, '9'));
