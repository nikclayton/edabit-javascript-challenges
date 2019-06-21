const reverse = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(reverse('Reverse')).toEqual('esreveR');
        expect(reverse('This is a typical sentence.')).toEqual('This is a lacipyt .ecnetnes');
        expect(reverse('The dog is big.')).toEqual('The dog is big.');
        expect(reverse('Reverse the order of every word greater than or equal to five characters.')).toEqual('esreveR the redro of yreve word retaerg than or lauqe to five .sretcarahc');
        expect(reverse('Lets all be unique together until we realise we are all the same.')).toEqual('Lets all be euqinu rehtegot litnu we esilaer we are all the .emas');
        expect(reverse('The old apple revels in its authority.')).toEqual('The old elppa slever in its .ytirohtua');
        expect(reverse('The shooter says goodbye to his love.')).toEqual('The retoohs says eybdoog to his .evol');
        expect(reverse('Please wait outside of the house.')).toEqual('esaelP wait edistuo of the .esuoh');
        expect(reverse('Two seats were vacant.')).toEqual('Two staes were .tnacav');
        expect(reverse('Sixty-Four comes asking for bread.')).toEqual('ruoF-ytxiS semoc gniksa for .daerb');
    });
});
