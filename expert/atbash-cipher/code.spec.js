const atbash = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(atbash('abcdefghijklmnopqrstuvwxyz')).toEqual('zyxwvutsrqponmlkjihgfedcba');
        expect(atbash('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toEqual('ZYXWVUTSRQPONMLKJIHGFEDCBA');
        expect(atbash('The word \'atbash\' derives from the the first and last 2 letters of the Hebrew alphabet.')).toEqual('Gsv dliw \'zgyzhs\' wvirevh uiln gsv gsv urihg zmw ozhg 2 ovggvih lu gsv Svyivd zokszyvg.');
        expect(atbash('Vmxibkgrlm zmw wvxibkgrlm ziv rwvmgrxzo uli gsv Zgyzhs xrksvi.')).toEqual('Encryption and decryption are identical for the Atbash cipher.');
    });
});
