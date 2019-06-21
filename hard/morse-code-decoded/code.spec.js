const decodeMorse = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(decodeMorse('. -.. .- -... -... .. -   -.-. .... .- .-.. .-.. . -. --. .')).toEqual('EDABBIT CHALLENGE');
        expect(decodeMorse('.... . .-.. .--.   -- .   -.-.--')).toEqual('HELP ME !');
        expect(decodeMorse('-.-. .... .- .-.. .-.. . -. --. .')).toEqual('CHALLENGE');
        expect(decodeMorse('.----   .- .--. .--. .-.. .   .- -. -..   .....   -.-. .... . .-. .-. -.-- --..--   --...   ... .- -. -.. .-- .. -.-. .... . ... --..--   ..---   - .- -... .-.. . ... --..--   ----.   .. -. ...- .. - . -..   --. ..- -.-- ...   -.-.--   - .... .- - .----. ...   ... ---   -.-. --- --- .-.. .-.-.- .-.-.- .-.-.-')).toEqual('1 APPLE AND 5 CHERRY, 7 SANDWICHES, 2 TABLES, 9 INVITED GUYS ! THAT\'S SO COOL...');
        expect(decodeMorse('-.. .. -..   -.-- --- ..-   --. --- -   -- -.--   -- .- .. .-..   ..--..')).toEqual('DID YOU GOT MY MAIL ?');
        expect(decodeMorse('- .-- ---   - .... .. -. --. ...   - ---   -.- -. --- .--   ---...   ..   ..-. --- .-. --. . -   - .... . --   ---... -.-.')).toEqual('TWO THINGS TO KNOW : I FORGET THEM :C');
    });
});
