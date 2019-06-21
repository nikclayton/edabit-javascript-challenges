const chatroomStatus = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(chatroomStatus([])).toEqual('no one online');
        expect(chatroomStatus(['becky325'])).toEqual('becky325 online');
        expect(chatroomStatus(['becky325', 'malcolm888'])).toEqual('becky325 and malcolm888 online');
        expect(chatroomStatus(['becky325', 'malcolm888', 'fah32fa'])).toEqual('becky325, malcolm888 and 1 more online');
        expect(chatroomStatus(['paRIE_to'])).toEqual('paRIE_to online');
        expect(chatroomStatus(['s234f', 'mailbox2'])).toEqual('s234f and mailbox2 online');
        expect(chatroomStatus(['pap_ier44', 'townieBOY', 'panda321', 'motor_bike5', 'sandwichmaker833', 'violinist91'])).toEqual('pap_ier44, townieBOY and 4 more online');
    });
});
