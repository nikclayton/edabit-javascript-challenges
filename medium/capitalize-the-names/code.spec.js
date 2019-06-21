const capMe = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(capMe(['mavis', 'senaida', 'letty'])).toEqual(['Mavis', 'Senaida', 'Letty']);
        expect(capMe(['samuel', 'MABELLE', 'letitia', 'meridith'])).toEqual(['Samuel', 'Mabelle', 'Letitia', 'Meridith']);
        expect(capMe(['Slyvia', 'Kristal', 'Sharilyn', 'Calista'])).toEqual(['Slyvia', 'Kristal', 'Sharilyn', 'Calista']);
        expect(capMe(['krisTopher', 'olIva', 'herminiA'])).toEqual(['Kristopher', 'Oliva', 'Herminia']);
        expect(capMe(['luke', 'marsha', 'stanford'])).toEqual(['Luke', 'Marsha', 'Stanford']);
        expect(capMe(['kara'])).toEqual(['Kara']);
        expect(capMe(['mARIANN', 'jOI', 'gEORGEANN'])).toEqual(['Mariann', 'Joi', 'Georgeann']);
    });
});
