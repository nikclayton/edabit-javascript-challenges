const totalPoints = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(totalPoints(['dote', 'dotes', 'toes', 'set', 'dot', 'dots', 'sted'], 'tossed')).toEqual(13);
        expect(totalPoints(['dial', 'tail', 'lid', 'tide', 'date', 'late', 'tad'], 'detail')).toEqual(12);
        expect(totalPoints(['trance', 'recant'], 'recant')).toEqual(108);
        expect(totalPoints(['bluest', 'sublet', 'let', 'set', 'belt', 'belts', 'bet', 'bets', 'sted', 'but', 'tule'], 'subtle')).toEqual(121);
        expect(totalPoints(['cat', 'create', 'sat'], 'caster')).toEqual(2);
        expect(totalPoints(['emote', 'tome', 'root'], 'meteor')).toEqual(5);
    });
});
