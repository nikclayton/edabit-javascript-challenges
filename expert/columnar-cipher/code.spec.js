const cCipher = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(cCipher('Meet me by the lake at midnight. Bring shovel.', 'python')).toEqual('thaiivelmhglmetgnembaitsetenroeykdbh');
        expect(cCipher('meeanbsleyamgioxebltirhxttkihnvxmhedtgex', 'monty')).toEqual('meetmebythelakeatmidnightbringshovelxxxx');
        expect(cCipher('The body is in the cellar wall.', 'edabit')).toEqual('escwbieahiertyhaonlldtll');
        expect(cCipher('Flight 1386 Gate 447 Contact November Bravo', 'lockjaw')).toEqual('ttnvrxi67texhaoobxggcnrxf34amvl84cbo1eteax');
        expect(cCipher('ecvnbpxgpslizxeerionzryisrixmnoowga', 'quirk')).toEqual('emergencyprovisionslowbringpizzaxxx');
        expect(cCipher('Mission Delta Kilo Sierra has been compromised. Kill Steve. Evacuate', 'cake')).toEqual('ioliiabcrsiteuxmieksrsnpiksecesdaoraemmdlvatxsntleheooelevax');
        expect(cCipher('haiowaseatuipvpoetteecrbsdhrrneearpxesspaywln', 'hazel')).toEqual('thetreasureisincopperwavebaypasswordelephantx');
    });
});
