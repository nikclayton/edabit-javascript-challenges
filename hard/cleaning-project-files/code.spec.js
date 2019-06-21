const cleanUp = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(cleanUp(['music_app.js', 'music_app.png', 'music_app.wav', 'tetris.png', 'tetris.js'], 'prefix')).toEqual([['music_app.js', 'music_app.png', 'music_app.wav'], ['tetris.png', 'tetris.js']]);
        expect(cleanUp(['_1.rb', '_2.rb', '_3.rb', '_4.rb'], 'suffix')).toEqual([['_1.rb', '_2.rb', '_3.rb', '_4.rb']]);
        expect(cleanUp(['_1.rb', '_2.rb', '_3.rb', '_4.rb'], 'prefix')).toEqual([['_1.rb'], ['_2.rb'], ['_3.rb'], ['_4.rb']]);
        expect(cleanUp(['project1.html', 'project2.html', 'project1.css', 'project2.css', 'project1.js', 'project2.js'], 'suffix')).toEqual([['project1.html', 'project2.html'], ['project1.css', 'project2.css'], ['project1.js', 'project2.js']]);
    });
});
