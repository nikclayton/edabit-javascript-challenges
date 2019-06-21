const wurstIsBetter = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(wurstIsBetter('Sausage fests are like salami fests')).toEqual('Wurst fests are like Wurst fests');
        expect(wurstIsBetter('Add the kielbasa and the reserved potatoes and stir through')).toEqual('Add the Wurst and the reserved potatoes and stir through');
        expect(wurstIsBetter('Salami sandwiches, salami and cheese, salami on crackers— I couldn\'t get enough of the salty, spicy sausage')).toEqual('Wurst sandwiches, Wurst and cheese, Wurst on crackers— I couldn\'t get enough of the salty, spicy Wurst');
        expect(wurstIsBetter('sich die Wurst vom Brot nehmen lassen')).toEqual('sich die Wurst vom Brot nehmen lassen');
        expect(wurstIsBetter('Bratwurst and Rostbratwurst is a sausage made from finely minced pork and beef and usually grilled and served with sweet German mustard and a piece of bread or hard roll. It can be sliced and made into Currywurst by slathering it in a catchup-curry sauce.')).toEqual('Bratwurst and Rostbratwurst is a Wurst made from finely minced pork and beef and usually grilled and served with sweet German mustard and a piece of bread or hard roll. It can be sliced and made into Currywurst by slathering it in a catchup-curry sauce.');
        expect(wurstIsBetter('Il n’arrête pas de faire l’andouille')).toEqual('Il n’arrête pas de faire l’Wurst');
        expect(wurstIsBetter('Naem is a common way of preserving pork meat in several Southeast Asian countries, including Thailand, Laos, Cambodia and Vietnam')).toEqual('Wurst is a common way of preserving pork meat in several Southeast Asian countries, including Thailand, Laos, Cambodia and Vietnam');
        expect(wurstIsBetter('The chipper group over at Orangatang recently dropped another wheel sensation; the Moronga')).toEqual('The chipper group over at Orangatang recently dropped another wheel sensation; the Wurst');
    });
});
