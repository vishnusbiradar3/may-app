import react from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProp } from '../../tesrUtilis';
import GuessedWord from '../../../componets/jotto/GuessedWord';

const defaultProps = {
    gussedWords: [
        { gussedWord: 'train', lettrMatchCount: 3 },
    ]
}
const setUp = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return (shallow(<GuessedWord  {...setupProps} />));
}



describe("if There are mo  words ther gussed ", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setUp({ gussedWords: [] });
    })
    test('render without error', () => {

        const component = findByTestAttr(wrapper, "[data-test='component-gussed-words']");
        expect(component.length).toBe(1);

    });
    test('render instraction to guess word', () => {
        const instaraction = findByTestAttr(wrapper, "[data-test='guss-word']");
        expect(instaraction.text().length).not.toBe(0)

    })
    test('does not throw warning with expected props', () => {
        checkProp(GuessedWord, defaultProps);
    })
})

describe("if there are words guessed", () => {


});