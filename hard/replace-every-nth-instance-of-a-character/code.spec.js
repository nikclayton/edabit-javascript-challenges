const replaceNth = require('./code');

describe('Tests', () => {
    test('Tests are case sensative.', () => {
        expect(replaceNth('Sometimes, all you NEED to do is completely make an ass of yourself and laugh it off to realise that LIFE isn’t so bad AFTER all.', 2, 'E', 'x')).toEqual('Sometimes, all you NExD to do is completely make an ass of yourself and laugh it off to realise that LIFE isn’t so bad AFTxR all.');
    });
    
    test('the tests', () => {
        expect(replaceNth('Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.', 3, 'e', '_')).toEqual('Sometimes it is b_tter to just walk away from things and go back to them lat_r when you’re in a b_tter frame of mind.');
        expect(replaceNth('The clock within this blog and the clock on my laptop are 1 hour different from each other.', 1, 'o', '@')).toEqual('The cl@ck within this bl@g and the cl@ck @n my lapt@p are 1 h@ur different fr@m each @ther.');
        expect(replaceNth('Lets all be unique together until we realise we are all the same.', 4, 'l', '#')).toEqual('Lets all be unique together until we rea#ise we are all the same.');
        expect(replaceNth('Is it free?', 100, 'e', 'Y')).toEqual('Is it free?');
        expect(replaceNth('A glittering gem is not enough.', 0, 'o', '-')).toEqual('A glittering gem is not enough.');
        expect(replaceNth('Please wait outside of the house.', -3, 's', 's')).toEqual('Please wait outside of the house.');
        expect(replaceNth('Joe made the sugar cookies; Susan decorated them.', 5, 'e', '*')).toEqual('Joe made the sugar cookies; Susan d*corated them.');
        expect(replaceNth('Writing a list of random sentences is harder than I initially thought it would be.', 2, 'i', '3')).toEqual('Writ3ng a list of random sentences 3s harder than I in3tially thought 3t would be.');
        expect(replaceNth('The book is in front of the table.', 3, 'f', 'K')).toEqual('The book is in front of the table.');
    });
});
