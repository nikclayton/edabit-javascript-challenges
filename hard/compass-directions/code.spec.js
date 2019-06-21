const finalDirection = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(finalDirection('N', ['L', 'L', 'L'])).toEqual('E');
        expect(finalDirection('N', ['R', 'R', 'R', 'R', 'R', 'R', 'R'])).toEqual('W');
        expect(finalDirection('N', ['R', 'R', 'R', 'L'])).toEqual('S');
        expect(finalDirection('N', ['R', 'R', 'R', 'R'])).toEqual('N');
        expect(finalDirection('N', ['R', 'L'])).toEqual('N');
        expect(finalDirection('S', ['R', 'L', 'R', 'L', 'R'])).toEqual('W');
        expect(finalDirection('S', ['R', 'L', 'R', 'L', 'R', 'L'])).toEqual('S');
        expect(finalDirection('S', ['R', 'L', 'R', 'L', 'L', 'L'])).toEqual('N');
        expect(finalDirection('S', ['R', 'R'])).toEqual('N');
        expect(finalDirection('S', ['R'])).toEqual('W');
        expect(finalDirection('S', ['L'])).toEqual('E');
        expect(finalDirection('W', ['L', 'R', 'R'])).toEqual('N');
        expect(finalDirection('W', ['R', 'L', 'L'])).toEqual('S');
        expect(finalDirection('E', ['L', 'R', 'R'])).toEqual('S');
        expect(finalDirection('E', ['R', 'L', 'L'])).toEqual('N');
    });
});
