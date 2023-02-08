// Our task is to create valid playing cards. If the given face of the card is invalid, we have to throw an error.

function createCard(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
        'S' : '\u2660', 
        'H' : '\u2665', 
        'D' : '\u2666', 
        'C' : '\u2663',
    };

    if (faces.includes(face) == false) {
        throw new TypeError('Error');
    }

    const result = {
        face,
        suit,
        toString () {
            return this.face + suits[this.suit];
        }
    }

    return result;
}

const cards = [
    createCard('A', 'S'),
    createCard('10', 'H')
]

console.log(cards.join('\n'));