const correctTitle = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(correctTitle('sansa stark, lady of winterfell.')).toEqual('Sansa Stark, Lady of Winterfell.');
        expect(correctTitle('lord eddard stark, hand of the king.')).toEqual('Lord Eddard Stark, Hand of the King.');
        expect(correctTitle('jaime lannister, lord commander of the kingsguard.')).toEqual('Jaime Lannister, Lord Commander of the Kingsguard.');
        expect(correctTitle('varys, master of whisperers.')).toEqual('Varys, Master of Whisperers.');
        expect(correctTitle('doran martell, prince of dorne, lord of sunspear.')).toEqual('Doran Martell, Prince of Dorne, Lord of Sunspear.');
        expect(correctTitle('TYRION LANNISTER, HAND OF THE QUEEN.')).toEqual('Tyrion Lannister, Hand of the Queen.');
        expect(correctTitle('GRAND MAESTER PYCELLE.')).toEqual('Grand Maester Pycelle.');
        expect(correctTitle('EURON GREYJOY, KING OF THE IRON ISLANDS, LORD REAPER OF PYKE.')).toEqual('Euron Greyjoy, King of the Iron Islands, Lord Reaper of Pyke.');
        expect(correctTitle('PETYR BAELISH, LORD PROTECTOR OF THE VALE.')).toEqual('Petyr Baelish, Lord Protector of the Vale.');
        expect(correctTitle('MANCE RAYDER, KING-BEYOND-THE-WALL.')).toEqual('Mance Rayder, King-Beyond-the-Wall.');
        expect(correctTitle('jOn SnoW, kINg IN thE noRth.')).toEqual('Jon Snow, King in the North.');
        expect(correctTitle('Jeor MORMONT, Lord COMMANDER of the NIGHT\'S WATCH.')).toEqual('Jeor Mormont, Lord Commander of the Night\'s Watch.');
        expect(correctTitle('cERSei LANnIStEr, QuEEn Of the aNdals and THE fIRSt men, PROtecTOR OF tHe SEVEN KInGdOmS.')).toEqual('Cersei Lannister, Queen of the Andals and the First Men, Protector of the Seven Kingdoms.');
        expect(correctTitle('DAeneRYS StOrmboRn oF hOuse TARGARYEn, ThE FirsT OF HER naMe, QUeEn OF The ANdAlS And THe FirsT mEN, PROtECtOr Of tHE SEven KinGDOmS, The MoTHeR of DrAGONS, thE KhALeEsi oF THE GReAt gRAss sEa, The UnburNT, The BReakEr of cHAInS.')).toEqual('Daenerys Stormborn of House Targaryen, the First of Her Name, Queen of the Andals and the First Men, Protector of the Seven Kingdoms, the Mother of Dragons, the Khaleesi of the Great Grass Sea, the Unburnt, the Breaker of Chains.');
    });
});
