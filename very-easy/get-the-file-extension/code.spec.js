const getExtension = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(getExtension(['project1.jpg', 'project1.pdf', 'project1.mp3'])).toEqual(['jpg', 'pdf', 'mp3']);
        expect(getExtension(['ruby.rb', 'cplusplus.cpp', 'python.py', 'javascript.js'])).toEqual(['rb', 'cpp', 'py', 'js']);
        expect(getExtension(['code.html', 'code.css'])).toEqual(['html', 'css']);
        expect(getExtension(['minesweeper.java', 'game.java', 'my_project.java'])).toEqual(['java', 'java', 'java']);
    });
});
