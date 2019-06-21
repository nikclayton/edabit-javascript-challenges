const makeTitle = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(makeTitle('I am a title')).toEqual('I Am A Title');
        expect(makeTitle('I AM A TITLE')).toEqual('I AM A TITLE');
        expect(makeTitle('i aM a tITLE')).toEqual('I AM A TITLE');
        expect(makeTitle('the first letter of every word is capitalized')).toEqual('The First Letter Of Every Word Is Capitalized');
        expect(makeTitle('I Like Pizza')).toEqual('I Like Pizza');
        expect(makeTitle('Don\'t count your ChiCKens BeFore They HatCh')).toEqual('Don\'t Count Your ChiCKens BeFore They HatCh');
        expect(makeTitle('All generalizations are false, including this one')).toEqual('All Generalizations Are False, Including This One');
        expect(makeTitle('Me and my wife lived happily for twenty years and then we met.')).toEqual('Me And My Wife Lived Happily For Twenty Years And Then We Met.');
        expect(makeTitle('There are no stupid questions, just stupid people.')).toEqual('There Are No Stupid Questions, Just Stupid People.');
        expect(makeTitle('1f you c4n r34d 7h15, you r34lly n33d 2 g37 l41d')).toEqual('1f You C4n R34d 7h15, You R34lly N33d 2 G37 L41d');
        expect(makeTitle('PIZZA PIZZA PIZZA')).toEqual('PIZZA PIZZA PIZZA');
    });
});
