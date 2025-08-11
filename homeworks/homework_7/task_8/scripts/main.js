function Cinderella(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

function Prince(name, age, color, size) {
    this.name = name;
    this.age = age;
    this.shoe = {
        color,
        size
    };
}

const girls = [
    new Cinderella('Cinderella_1', 20, 33),
    new Cinderella('Cinderella_2', 21, 34),
    new Cinderella('Cinderella_3', 22, 35),
    new Cinderella('Cinderella_4', 23, 36),
    new Cinderella('Cinderella_5', 24, 37),
    new Cinderella('Cinderella_6', 25, 38),
    new Cinderella('Cinderella_7', 26, 39),
    new Cinderella('Cinderella_8', 27, 40),
    new Cinderella('Cinderella_9', 28, 41),
    new Cinderella('Cinderella_10', 29, 42),
];

const prince = new Prince('Kristopher', 26, 'black', 38);

for (const girl of girls) {
    if(girl.footSize === prince.shoe.size) {
        console.log(`Cinderella was found, ${JSON.stringify(girl)}`);
        break;
    }
}

const realCinderella = girls.find((girl) => girl.footSize === prince.shoe.size);
