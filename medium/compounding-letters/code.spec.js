const accum = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(accum('abcd')).toEqual('A-Bb-Ccc-Dddd');
        expect(accum('RqaEzty')).toEqual('R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy');
        expect(accum('cwAt')).toEqual('C-Ww-Aaa-Tttt');
        expect(accum('VgyCdnQa')).toEqual('V-Gg-Yyy-Cccc-Ddddd-Nnnnnn-Qqqqqqq-Aaaaaaaa');
        expect(accum('nRBSdNOsMl')).toEqual('N-Rr-Bbb-Ssss-Ddddd-Nnnnnn-Ooooooo-Ssssssss-Mmmmmmmmm-Llllllllll');
        expect(accum('nuE')).toEqual('N-Uu-Eee');
        expect(accum('RlDrhZuQaqsoHEfziByObtMxkFCJVe')).toEqual('R-Ll-Ddd-Rrrr-Hhhhh-Zzzzzz-Uuuuuuu-Qqqqqqqq-Aaaaaaaaa-Qqqqqqqqqq-Sssssssssss-Oooooooooooo-Hhhhhhhhhhhhh-Eeeeeeeeeeeeee-Fffffffffffffff-Zzzzzzzzzzzzzzzz-Iiiiiiiiiiiiiiiii-Bbbbbbbbbbbbbbbbbb-Yyyyyyyyyyyyyyyyyyy-Oooooooooooooooooooo-Bbbbbbbbbbbbbbbbbbbbb-Tttttttttttttttttttttt-Mmmmmmmmmmmmmmmmmmmmmmm-Xxxxxxxxxxxxxxxxxxxxxxxx-Kkkkkkkkkkkkkkkkkkkkkkkkk-Ffffffffffffffffffffffffff-Ccccccccccccccccccccccccccc-Jjjjjjjjjjjjjjjjjjjjjjjjjjjj-Vvvvvvvvvvvvvvvvvvvvvvvvvvvvv-Eeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
        expect(accum('EXpzPFx')).toEqual('E-Xx-Ppp-Zzzz-Ppppp-Ffffff-Xxxxxxx');
        expect(accum('NU')).toEqual('N-Uu');
        expect(accum('g')).toEqual('G');
    });
});
