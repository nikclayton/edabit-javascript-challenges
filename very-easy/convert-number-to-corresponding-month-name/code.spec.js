const month_name = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(month_name(1)).toEqual('January');
        expect(month_name(2)).toEqual('February');
        expect(month_name(3)).toEqual('March');
        expect(month_name(4)).toEqual('April');
        expect(month_name(5)).toEqual('May');
        expect(month_name(6)).toEqual('June');
        expect(month_name(7)).toEqual('July');
        expect(month_name(8)).toEqual('August');
        expect(month_name(9)).toEqual('September');
        expect(month_name(10)).toEqual('October');
        expect(month_name(11)).toEqual('November');
        expect(month_name(12)).toEqual('December');
    });
});
