const isSet = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isSet([{color: 'red', number: 1, shade: 'lined', shape: 'squiggle'}, {color: 'red', number: 1, shade: 'lined', shape: 'diamond'}, {color: 'red', number: 1, shade: 'lined', shape: 'squiggle'}])).toEqual(false);
        expect(isSet([{color: 'red', number: 1, shade: 'lined', shape: 'squiggle'}, {color: 'red', number: 1, shade: 'lined', shape: 'diamond'}, {color: 'red', number: 1, shade: 'lined', shape: 'oval'}])).toEqual(true);
        expect(isSet([{color: 'red', number: 1, shade: 'empty', shape: 'squiggle'}, {color: 'red', number: 1, shade: 'lined', shape: 'diamond'}, {color: 'red', number: 1, shade: 'lined', shape: 'oval'}])).toEqual(false);
        expect(isSet([{color: 'red', number: 1, shade: 'empty', shape: 'squiggle'}, {color: 'red', number: 2, shade: 'lined', shape: 'diamond'}, {color: 'red', number: 3, shade: 'full', shape: 'oval'}])).toEqual(true);
        expect(isSet([{color: 'green', number: 1, shade: 'empty', shape: 'squiggle'}, {color: 'green', number: 2, shade: 'empty', shape: 'diamond'}, {color: 'green', number: 3, shade: 'empty', shape: 'oval'}])).toEqual(true);
        expect(isSet([{color: 'purple', number: 1, shade: 'full', shape: 'oval'}, {color: 'green', number: 1, shade: 'full', shape: 'oval'}, {color: 'red', number: 1, shade: 'full', shape: 'oval'}])).toEqual(true);
        expect(isSet([{color: 'purple', number: 3, shade: 'full', shape: 'oval'}, {color: 'green', number: 1, shade: 'full', shape: 'oval'}, {color: 'red', number: 3, shade: 'full', shape: 'oval'}])).toEqual(false);
        expect(isSet([{color: 'red', number: 1, shade: 'empty', shape: 'squiggle'}, {color: 'red', number: 2, shade: 'lined', shape: 'diamond'}, {color: 'purple', number: 3, shade: 'full', shape: 'oval'}])).toEqual(false);
    });
});
