const encodeMorse = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(encodeMorse('EDABBIT CHALLENGE')).toEqual('. -.. .- -... -... .. -   -.-. .... .- .-.. .-.. . -. --. .');
        expect(encodeMorse('HELP ME !')).toEqual('.... . .-.. .--.   -- .   -.-.--');
        expect(encodeMorse('CHALLENGE')).toEqual('-.-. .... .- .-.. .-.. . -. --. .');
        expect(encodeMorse('1 APPLE AND 5 CHERRY, 7 SANDWICHES, 2 TABLES, 9 INVITED GUYS ! THAT\'S SO COOL...')).toEqual('.----   .- .--. .--. .-.. .   .- -. -..   .....   -.-. .... . .-. .-. -.-- --..--   --...   ... .- -. -.. .-- .. -.-. .... . ... --..--   ..---   - .- -... .-.. . ... --..--   ----.   .. -. ...- .. - . -..   --. ..- -.-- ...   -.-.--   - .... .- - .----. ...   ... ---   -.-. --- --- .-.. .-.-.- .-.-.- .-.-.-');
        expect(encodeMorse('did you got my mail ?')).toEqual('-.. .. -..   -.-- --- ..-   --. --- -   -- -.--   -- .- .. .-..   ..--..');
        expect(encodeMorse('TWO THInGS TO KNOW : i FORGeT THeM :C')).toEqual('- .-- ---   - .... .. -. --. ...   - ---   -.- -. --- .--   ---...   ..   ..-. --- .-. --. . -   - .... . --   ---... -.-.');
    });
});
