const findShortestWords = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(findShortestWords('Strive not to be a success, but rather to be of value.')).toEqual(['a']);
        expect(findShortestWords('You miss 100% of the shots you don’t take.')).toEqual(['of']);
        expect(findShortestWords('Life is what happens to you while you’re busy making other plans.')).toEqual(['is', 'to']);
        expect(findShortestWords('We become what we think about.')).toEqual(['we', 'we']);
        expect(findShortestWords('The most common way people give up their power is by thinking they don’t have any.')).toEqual(['by', 'is', 'up']);
        expect(findShortestWords('The best time to plant the tree was 20 years ago. The second best time is now.')).toEqual(['is', 'to']);
        expect(findShortestWords('Your time is limited, so don’t waste it living someone else’s life.')).toEqual(['is', 'it', 'so']);
        expect(findShortestWords('You can never cross the ocean until you have the courage to lose sight of the shore.')).toEqual(['of', 'to']);
        expect(findShortestWords('There is only one way to avoid criticism: do nothing, say nothing, and be nothing.')).toEqual(['be', 'do', 'is', 'to']);
        expect(findShortestWords('The only person you are destined to become is the person you decide to be.')).toEqual(['be', 'is', 'to', 'to']);
        expect(findShortestWords('What lies behind us and what lies before us are tiny matters compared to what lies within us.')).toEqual(['to', 'us', 'us', 'us']);
        expect(findShortestWords('If you are depressed you are living in the past. If you are anxious you are living in the future. If you are at peace you are living in the present.')).toEqual(['at', 'if', 'if', 'if', 'in', 'in', 'in']);
        expect(findShortestWords('Happiness depends upon ourselves.')).toEqual(['upon']);
        expect(findShortestWords('Chase two rabbits, catch none.')).toEqual(['two']);
        expect(findShortestWords('Only the truth of who you are, if realized, will set you free.')).toEqual(['if', 'of']);
        expect(findShortestWords('If you end up with a boring miserable life because you listened to your parents, your teacher, your priest, or some guy on television, then you deserve it.')).toEqual(['a']);
        expect(findShortestWords('To accomplish great things, we must not only act, but also dream; not only plan, but also believe.')).toEqual(['to', 'we']);
        expect(findShortestWords('A tiger doesn’t lose sleep over the opinion of sheep.')).toEqual(['a']);
        expect(findShortestWords('Kindness is a language that the deaf can hear and the blind can see.')).toEqual(['a']);
        expect(findShortestWords('Being realistic is the most common path to mediocrity.')).toEqual(['is', 'to']);
        expect(findShortestWords('Bravery means finding something more important than fear.')).toEqual(['fear', 'more', 'than']);
        expect(findShortestWords('Can you imagine what I would do if I could do all I can?')).toEqual(['i', 'i', 'i']);
        expect(findShortestWords('Believe you can and you’re halfway there.')).toEqual(['and', 'can', 'you']);
        expect(findShortestWords('Remember that happiness is a way of travel, not a destination.')).toEqual(['a', 'a']);
        expect(findShortestWords('May the best day of your past be the worst day of your future.')).toEqual(['be', 'of', 'of']);
    });
});
