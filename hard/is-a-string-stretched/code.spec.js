const isStretched = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isStretched('pppaaannndddaaa', 'panda')).toEqual(true);
        expect(isStretched('hheelllloo', 'hello')).toEqual(true);
        expect(isStretched('magnet', 'magnet')).toEqual(true);
        expect(isStretched('eeeeemmmmmoooootttttiiiiiooooonnnnn', 'emotion')).toEqual(true);
        expect(isStretched('sssshhiipp', 'ship')).toEqual(false);
        expect(isStretched('cccaaannnddooorrr', 'candor')).toEqual(false);
        expect(isStretched('relationshiipp', 'relationship')).toEqual(false);
        expect(isStretched('magneto', 'magnet')).toEqual(false);
        expect(isStretched('maggnet', 'magnet')).toEqual(false);
    });
});
