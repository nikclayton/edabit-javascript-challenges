const textToNum = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect('123-647-3937').toEqual(textToNum('123-647-EYES'));
        expect('(325)444-8378').toEqual(textToNum('(325)444-TEST'));
        expect('653-879-8447').toEqual(textToNum('653-TRY-THIS'));
        expect('435-224-7613').toEqual(textToNum('435-224-7613'));
        expect('(333)668-3245').toEqual(textToNum('(33D)ONT-FAIL'));
        expect('(025)445-6741').toEqual(textToNum('(025)445-6741'));
    });
});
