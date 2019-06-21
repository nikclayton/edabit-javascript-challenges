const greetPeople = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(greetPeople(['Kyrill'])).toEqual('Hello Kyrill');
        expect(greetPeople(['Kyrill', 'Mom', 'Dad', 'Zuzu'])).toEqual('Hello Kyrill, Hello Mom, Hello Dad, Hello Zuzu');
        expect(greetPeople([])).toEqual('');
    });
});
