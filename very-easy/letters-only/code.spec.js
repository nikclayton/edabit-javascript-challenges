const lettersOnly = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(lettersOnly(',1|2)")A^1<[_)?^"]l[a`3+%!d@8-0_0d.*}i@&n?=')).toEqual('Aladdin');
        expect(lettersOnly('^U)6$22>8p).')).toEqual('Up');
        expect(lettersOnly('I5n!449+c@e*}@@1]p{2@`,~t:i0o%n<3%8')).toEqual('Inception');
        expect(lettersOnly('!)"P[s9)"69}yc3+?1]+33>3ho')).toEqual('Psycho');
        expect(lettersOnly(':~;G{o}o{+524<df~:>}e24{l8:_l]a:?@]%s7')).toEqual('Goodfellas');
        expect(lettersOnly('&&S~]@8>1-0!h#r),80<_>!}|e>_k:')).toEqual('Shrek');
        expect(lettersOnly(')^/|,!!09]=/1<G2?`=[l{a}d9]^i7a0|t6_o2*r')).toEqual('Gladiator');
        expect(lettersOnly(']8;]V9e{=0r!.5t>i<^_g"4o"5~')).toEqual('Vertigo');
        expect(lettersOnly('%%)?"?B#>/_4a#,;t8|m8675a(n')).toEqual('Batman');
        expect(lettersOnly('97H^)~a8567ll*o?"6%)w63e37e<n?@=')).toEqual('Halloween');
    });
});
