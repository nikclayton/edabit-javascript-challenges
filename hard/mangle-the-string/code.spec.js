const mangled = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(mangled('Fun times!')).toEqual('GvO Ujnft!');
        expect(mangled('The quick brown fox.')).toEqual('UIf rvjdl cspxO gpy.');
        expect(mangled('Omega')).toEqual('Pnfhb');
        expect(mangled('I will never be this young again. Ever. Oh damn… I just got older.')).toEqual('J xjmm Ofwfs cf UIjt zpvOh bhbjO. Fwfs. PI EbnO… J kvtU hpU pmEfs.');
        expect(mangled('Should we start class now, or should we wait for everyone to get here?')).toEqual('TIpvmE xf tUbsU dmbtt Opx, ps tIpvmE xf xbjU gps fwfszpOf Up hfU Ifsf?');
        expect(mangled('Check back tomorrow; I will see if the book has arrived.')).toEqual('DIfdl cbdl Upnpsspx; J xjmm tff jg UIf cppl Ibt bssjwfE.');
        expect(mangled('The lake is a long way from here.')).toEqual('UIf mblf jt b mpOh xbz gspn Ifsf.');
        expect(mangled('It was getting dark, and we weren’t there yet.')).toEqual('JU xbt hfUUjOh Ebsl, bOE xf xfsfO’U UIfsf zfU.');
        expect(mangled('The mysterious diary records the voice.')).toEqual('UIf nztUfsjpvt Ejbsz sfdpsEt UIf wpjdf.');
        expect(mangled('Cats are good pets, for they are clean and are not noisy.')).toEqual('DbUt bsf hppE qfUt, gps UIfz bsf dmfbO bOE bsf OpU Opjtz.');
    });
});
