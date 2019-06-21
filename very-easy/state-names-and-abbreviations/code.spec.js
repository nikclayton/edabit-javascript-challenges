const filterStateNames = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(filterStateNames(['Arizona', 'CA', 'NY', 'Nevada'], 'abb')).toEqual(['CA', 'NY']);
        expect(filterStateNames(['Arizona', 'CA', 'NY', 'Nevada'], 'full')).toEqual(['Arizona', 'Nevada']);
        expect(filterStateNames(['MT', 'NJ', 'TX', 'ID', 'IL'], 'abb')).toEqual(['MT', 'NJ', 'TX', 'ID', 'IL']);
        expect(filterStateNames(['MT', 'NJ', 'TX', 'ID', 'IL'], 'full')).toEqual([]);
        expect(filterStateNames(['Montana', 'FL'], 'abb')).toEqual(['FL']);
        expect(filterStateNames(['Montana', 'FL'], 'full')).toEqual(['Montana']);
    });
});
