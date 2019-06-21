const canBuild = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(canBuild(['a', 'at', 'ate', 'late', 'plate', 'plates'])).toEqual(true);
        expect(canBuild(['u', 'ut', 'but', 'butt', 'butte', 'butter', 'buttery'])).toEqual(true);
        expect(canBuild(['a', 'ka', 'ika', 'pika', 'pikac', 'pikach', 'pikachu'])).toEqual(true);
        expect(canBuild(['a', 'at', 'tat', 'stat', 'state', 'estate', 'estates'])).toEqual(true);
        expect(canBuild(['o', 'ol', 'old', 'bold', 'bolde', 'mbolde', 'embolde', 'embolden'])).toEqual(true);
        expect(canBuild(['mean', 'meany'])).toEqual(true);
        expect(canBuild(['at', 'cat', 'cate', 'cater', 'caters'])).toEqual(true);
        expect(canBuild(['a', 'at', 'ate', 'late', 'plate', 'plater', 'platter'])).toEqual(false);
        expect(canBuild(['i', 'it', 'bit', 'bite', 'biters'])).toEqual(false);
        expect(canBuild(['e', 'tea', 'teac', 'teach', 'teache', 'teacher', 'teachers'])).toEqual(false);
        expect(canBuild(['m', 'ma', 'man', 'many', 'meany'])).toEqual(false);
        expect(canBuild(['o', 'op', 'top', 'stop', 'stops', 'stoops'])).toEqual(false);
        expect(canBuild(['air', 'air', 'airy', 'fairy'])).toEqual(false);
        expect(canBuild(['men', 'mean', 'meany'])).toEqual(false);
    });
});
