const removeDups = require('./code');

describe('Tests', () => {
    
    
    test('the tests', () => {
        expect(removeDups(['John', 'Taylor', 'John'])).toEqual(['John', 'Taylor']);
        expect(removeDups(['John', 'Taylor', 'John', 'john'])).toEqual(['John', 'Taylor', 'john']);
        expect(removeDups(['javascript', 'python', 'python', 'ruby', 'javascript', 'c', 'ruby'])).toEqual(['javascript', 'python', 'ruby', 'c']);
        expect(removeDups([1, 2, 2, 2, 3, 2, 5, 2, 6, 6, 3, 7, 1, 2, 5])).toEqual([1, 2, 3, 5, 6, 7]);
        expect(removeDups(['#', '#', '%', '&', '#', '$', '&'])).toEqual(['#', '%', '&', '$']);
        expect(removeDups([3, 'Apple', 3, 'Orange', 'Apple'])).toEqual([3, 'Apple', 'Orange']);
    });
});
