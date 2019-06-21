const increasingWordWeights = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(increasingWordWeights('Why not try?')).toEqual(true);
        expect(increasingWordWeights('Face your fears, never settle.')).toEqual(true);
        expect(increasingWordWeights('DON\'T SHOUT!')).toEqual(true);
        expect(increasingWordWeights('Can you just leave?')).toEqual(true);
        expect(increasingWordWeights('You will push ahead, creating solutions!')).toEqual(true);
        expect(increasingWordWeights('All that money doesn\'t guarantee happiness.')).toEqual(true);
        expect(increasingWordWeights('Full steam ahead!')).toEqual(false);
        expect(increasingWordWeights('Not all those who wander are lost.')).toEqual(false);
        expect(increasingWordWeights('All other roads.')).toEqual(false);
        expect(increasingWordWeights('Whatever you are, be a good one.')).toEqual(false);
        expect(increasingWordWeights('Standing on the shoulders of giants.')).toEqual(false);
        expect(increasingWordWeights('You get what you settle for.')).toEqual(false);
    });
});
