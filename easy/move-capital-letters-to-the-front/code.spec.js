const capToFront = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(capToFront('hApPy')).toEqual('APhpy');
        expect(capToFront('moveMENT')).toEqual('MENTmove');
        expect(capToFront('aPPlE')).toEqual('PPEal');
        expect(capToFront('shOrtCAKE')).toEqual('OCAKEshrt');
    });
});
