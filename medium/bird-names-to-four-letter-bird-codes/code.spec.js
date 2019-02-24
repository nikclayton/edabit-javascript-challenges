const birdCode = require('./code');

describe('Tests', () => {
    
    
    test('the tests', () => {
        expect(birdCode(['Common Tern', 'Black-Capped Chickadee'])).toEqual(['COTE', 'BCCH']);
        expect(birdCode(['American Redstart', 'Northern Cardinal', 'Pine Grosbeak', 'Barred Owl', 'Starling', 'Cooper\'s Hawk', 'Pigeon'])).toEqual(['AMRE', 'NOCA', 'PIGR', 'BAOW', 'STAR', 'COHA', 'PIGE']);
        expect(birdCode(['Great Crested Flycatcher', 'Bobolink', 'American White Pelican', 'Red-Tailed Hawk', 'Eastern Screech Owl', 'Blue Jay'])).toEqual(['GCFL', 'BOBO', 'AWPE', 'RTHA', 'ESOW', 'BLJA']);
        expect(birdCode(['Black-Crowned Night Heron', 'Northern Mockingbird', 'Eastern Meadowlark', 'Dark-Eyed Junco', 'Red-Bellied Woodpecker'])).toEqual(['BCNH', 'NOMO', 'EAME', 'DEJU', 'RBWO']);
        expect(birdCode(['Scarlet Tanager', 'Great Blue Heron', 'Eastern Phoebe', 'American Black Duck', 'Mallard', 'Canvasback', 'Merlin', 'Ovenbird'])).toEqual(['SCTA', 'GBHE', 'EAPH', 'ABDU', 'MALL', 'CANV', 'MERL', 'OVEN']);
        expect(birdCode(['Fox Sparrow', 'White-Winged Crossbill', 'Veery', 'American Coot', 'Sora', 'Northern Rough-Winged Swallow', 'Purple Martin'])).toEqual(['FOSP', 'WWCR', 'VEER', 'AMCO', 'SORA', 'NRWS', 'PUMA']);
    });
});
