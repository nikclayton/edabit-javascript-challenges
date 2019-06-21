const completelyFilled = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(completelyFilled(['#'])).toEqual(true);
        expect(completelyFilled(['##', '##'])).toEqual(true);
        expect(completelyFilled(['###', '#*#', '###'])).toEqual(true);
        expect(completelyFilled(['######', '#****#', '#****#', '#****#', '#****#', '######'])).toEqual(true);
        expect(completelyFilled(['#####', '#***#', '#***#', '#***#', '#####'])).toEqual(true);
        expect(completelyFilled(['#####', '#* *#', '#***#', '#***#', '#####'])).toEqual(false);
        expect(completelyFilled(['######', '#* **#', '#****#', '#* **#', '#*** #', '######'])).toEqual(false);
        expect(completelyFilled(['######', '#* **#', '#* **#', '#* **#', '#* **#', '######'])).toEqual(false);
    });
});
