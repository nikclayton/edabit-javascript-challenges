const isCorrectAliases = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isCorrectAliases(['Adrian M.', 'Harriet S.', 'Mandy T.'], ['Amazing Artichoke', 'Hopeful Hedgehog', 'Marvelous Mouse'])).toEqual(true);
        expect(isCorrectAliases(['Rachel F.', 'Pam G.', 'Fred Z.', 'Nancy K.'], ['Reassuring Rat', 'Peaceful Panda', 'Fantastic Frog', 'Notable Nickel'])).toEqual(true);
        expect(isCorrectAliases(['Beth T.'], ['Brandishing Mimosa'])).toEqual(false);
        expect(isCorrectAliases(['Mick S.', 'Sam R.', 'Val W.'], ['Magnificent Mint', 'Sly Serpent', 'Victorious Viceroy'])).toEqual(true);
        expect(isCorrectAliases(['Bella T.', 'Tom H.', 'Ben C.'], ['Beautiful Barn', 'Talented Tapestry', 'Cool Bamboo'])).toEqual(false);
        expect(isCorrectAliases(['Bella T.', 'Tom H.', 'Ben C.'], ['Beautiful Barn', 'Talented Tapestry', 'Bountiful Bamboo'])).toEqual(true);
    });
});
