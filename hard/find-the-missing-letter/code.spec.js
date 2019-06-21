const missingLetter = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(missingLetter(['a', 'b', 'c', 'e', 'f', 'g'])).toEqual('d');
        expect(missingLetter(['O', 'Q', 'R', 'S'])).toEqual('P');
        expect(missingLetter(['t', 'u', 'v', 'w', 'x', 'z'])).toEqual('y');
        expect(missingLetter(['m', 'o'])).toEqual('n');
        expect(missingLetter(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])).toEqual('i');
        expect(missingLetter(['q', 's', 't'])).toEqual('r');
        expect(missingLetter(['c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n'])).toEqual('j');
        expect(missingLetter(['e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'o', 'p'])).toEqual('l');
        expect(missingLetter(['t', 'u', 'w', 'x'])).toEqual('v');
        expect(missingLetter(['B', 'D'])).toEqual('C');
    });
});
