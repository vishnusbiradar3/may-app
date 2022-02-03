import React from 'react';
import { mount } from 'enzyme';
import Jotto from '../../../componets/jotto/Jotto';
import { findByTestAttr } from '../../tesrUtilis';



const setUp = (state = {}) => {

    const wrapper = mount(<Jotto />);
    // add value input 

    const inputBox = findByTestAttr(wrapper, "[data-test='input-box']");
    inputBox.simulate('change', { target: { value: 'train' } });
    //simulate click on submit

    const submitButton = findByTestAttr(wrapper, "[data-test='submit-button']");
    submitButton.simulate('click', { preventDefault() { } });


    return wrapper;

}

describe.skip('no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setUp({
            secretWord: 'party',
            sucess: false,
            guessedWords: []
        })
    });
    test('creates gussedWords table with one row', () => {
      const gussedWordsRow =findByTestAttr(wrapper,"[data-test='guessed-word']");
      expect(gussedWordsRow).toHaveLength(1);
    });
    
});

describe.skip('some words guessed', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = setUp({
            secretWord: 'party',
            sucess: false,
            guessedWords: [{gussedWord: 'agile',letterMatchCount:1}]
        })
    });
    test('adds row to guessedWords table', () => {
      const gussedWordsRow =findByTestAttr(wrapper,"[data-test='guessed-word']");
      expect(gussedWordsRow).toHaveLength(2);
    });
});

describe.skip('guess secret word', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = setUp({
            secretWord: 'party',
            sucess: false,
            guessedWords: [{gussedWord: 'agile',letterMatchCount:1}]
        })

            //add value to input box
    const inputBox = findByTestAttr(wrapper,"[Data-test='input-box']");
    const mockEvent ={target :{value:'party'}};
    inputBox.simulate('change',mockEvent);

    
    const submitButton = findByTestAttr(wrapper, "[data-test='submit-button']");
    submitButton.simulate('click', { preventDefault() { } });

    });



    test('adds row to guessedWords table', () => {
      const gussedWordsRow =findByTestAttr(wrapper,"[data-test='guessed-word']");
      expect(gussedWordsRow).toHaveLength(3);
    });

    test('displays congrats componet ', () => {
        const congrats =findByTestAttr(wrapper,"[data-test='\component-congrats']");
        expect(congrats.text().length).toBeGreaterThan(0);
      });

      test('does not display input component contes', () => {
        const inputBox=findByTestAttr(wrapper, "[data-test='input-box']");
        expect(inputBox.exists()).toBe(false);
        const submitButton =findByTestAttr(wrapper,"[data-test='submit-button']");
        expect(submitButton.exists()).toBe(false);
      });
      
});
