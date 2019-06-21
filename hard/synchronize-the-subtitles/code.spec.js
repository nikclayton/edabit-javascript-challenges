const syncSubs = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(syncSubs(`708
00:44:50,006 --> 00:44:53,007
People are taking this festival
extremely seriously.`, `00:03:30,550`)).toEqual(`708
00:48:20,556 --> 00:48:23,557
People are taking this festival
extremely seriously.`);
        expect(syncSubs(`729
00:45:55,704 --> 00:45:59,506
So we don't have to wait for it.`, `00:00:00,000`)).toEqual(`729
00:45:55,704 --> 00:45:59,506
So we don't have to wait for it.`);
        expect(syncSubs(`735
00:46:24,967 --> 00:46:27,701
We've already won.

736
00:46:27,736 --> 00:46:30,637
[Crowd cheers]`, `01:21:00,211`)).toEqual(`735
02:07:25,178 --> 02:07:27,912
We've already won.

736
02:07:27,947 --> 02:07:30,848
[Crowd cheers]`);
        expect(syncSubs(`722
00:45:34,483 --> 00:45:36,917
My mercy...`, `00:60:09,010`)).toEqual(`There is a problem with the second argument`);
        expect(syncSubs(`722
00:45:34,483 --> 00:45:36,917
My mercy...`, `00:00:09.000`)).toEqual(`There is a problem with the second argument`);
        expect(syncSubs(`722
00:45:34,483 --> 00:45:36,917
My mercy...`, `0:4:5,921`)).toEqual(`There is a problem with the second argument`);
        expect(syncSubs(`187
00:13:29,202 --> 00:13:37,202
♪`, `02:54:55,999`)).toEqual(`187
03:08:25,201 --> 03:08:33,201
♪`);
    });
});
