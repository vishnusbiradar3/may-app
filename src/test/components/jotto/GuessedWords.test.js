import react from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProp } from '../../tesrUtilis';
import GuessedWords from '../../../componets/jotto/GuessedWords';

const defaultProps = {
    gussedWords: [
        { gussedWord: 'train', lettrMatchCount: 3 },
    ]
}
const setUp = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return (shallow(<GuessedWords  {...setupProps} />));
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
        checkProp(GuessedWords, defaultProps);
    })
})

describe("if there are words guessed", () => {
    let wrapper;

    const gussedWords = [
        { gussedWord: "train", lettrMatchCount: 3 },
        { gussedWord: "agile", lettrMatchCount: 1 },
        { gussedWord: "party", lettrMatchCount: 5 }

    ];
    beforeEach(() => {
        wrapper = setUp({ gussedWords });
    })

    test('render witout error', () => {

        const component = findByTestAttr(wrapper, "[data-test='component-gussed-words']");
        expect(component.length).toBe(1);

    })

    test('render "gussed words ",sections', () => {

        const gussedWordDiv = findByTestAttr(wrapper, "[data-test='gussed-words']");
        expect(gussedWordDiv.length).toBe(1);

    })
    test('correct number of gussed words', () => {
        const gussedWordsNodes = findByTestAttr(wrapper, "[data-test='gussed-word']");
        expect(gussedWordsNodes.length).toBe(gussedWords.length);
    })

});