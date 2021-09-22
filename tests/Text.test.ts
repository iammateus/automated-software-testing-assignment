import Text from '../src/Text';

const faker = require('faker');

describe('Text', () => {
    it('should exist as a class', () => {
        expect(Text.name).toEqual('Text');
    });

    it('should instanciate with a string argument', () => {
        const text: Text = new Text(faker.lorem.word());
        expect(text).toBeInstanceOf(Text);
    });
});
