const toCamelCase = require('./code');

describe('Tests', () => {
    test('Did not return correct value', () => {
        expect(toCamelCase('the_stealth_warrior')).toEqual('theStealthWarrior');
    });

test('Did not return correct value', () => {
        expect(toCamelCase('The-Stealth-Warrior')).toEqual('TheStealthWarrior');
    });

test('Did not return correct value.', () => {
        expect(toCamelCase('A-B-C')).toEqual('ABC');
    });

test('An empty string was provided but not returned.', () => {
        expect(toCamelCase('')).toEqual('');
    });
});
