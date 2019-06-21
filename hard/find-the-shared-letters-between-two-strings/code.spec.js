const sharedLetters = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(sharedLetters('house', 'home')).toEqual('eho');
        expect(sharedLetters('Micky', 'mouse')).toEqual('m');
        expect(sharedLetters('house', 'villa')).toEqual('');
        expect(sharedLetters('Aa', 'aA')).toEqual('a');
        expect(sharedLetters('https://www.example.com', 'https://www.canada.ca')).toEqual('./:achpstw');
        expect(sharedLetters('Edabit', 'Matt')).toEqual('at');
        expect(sharedLetters('🙂😀😄😁', '🙂😞😔😣')).toEqual('🙂');
        expect(sharedLetters('Javascript', 'Swift')).toEqual('ist');
        expect(sharedLetters('Functional programming', 'Object oriented programming')).toEqual(' acgimnoprt');
        expect(sharedLetters('My dog is a GOOD BOY 🐶', 'Do you like ice cream? 🍦')).toEqual(' adimoy');
    });
});
