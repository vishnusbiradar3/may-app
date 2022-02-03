import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProp } from '../../tesrUtilis';
import Input from '../../../componets/jotto/Input';

const setUp = (success=false,secrectWord = 'party') => {
    return (shallow(<Input success= {success} secrectWord={secrectWord} />));
}

describe('render',()=>{
    describe('sucess is true',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper=setUp(true);
        })
        test('render without error', () => {
            const wrapper = setUp({ gussedWords: [] });
            const component = findByTestAttr(wrapper, "[data-test='component-input']");
            expect(component.length).toBe(1);
        
        });
        test('Input box does not shoe',()=>{
            const inputBox=findByTestAttr(wrapper, "[data-test='input-box']");
            expect(inputBox.exists()).toBe(false);
        })
        test('submit button does not shoe ',()=>{
            const submitButton =findByTestAttr(wrapper,"[data-test='submit-button']");
            expect(submitButton.exists()).toBe(false);
        })
    });
    describe('sucess is false',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper=setUp(false);
        })
        test('render without error', () => {
            const wrapper = setUp({ gussedWords: [] });
            const component = findByTestAttr(wrapper, "[data-test='component-input']");
            expect(component.length).toBe(1);
        
        });
        test('Input box  show',()=>{
            const inputBox=findByTestAttr(wrapper, "[data-test='input-box']");
            expect(inputBox.exists()).toBe(true);
        })
        test('submit button show',()=>{
            const submitButton =findByTestAttr(wrapper,"[data-test='submit-button']");
            expect(submitButton.exists()).toBe(true);
        })
    })
})


test('does not throw warning with expected props', () => {
    checkProp(Input, { secrectWord: 'party' });
})

describe('state controlled input Field', () => {
    let mockSetCurrentGuess=jest.fn(), wrapper, originalUseState;
    beforeEach(() => {
        mockSetCurrentGuess.mockClear();
        originalUseState = React.useState;
        mockSetCurrentGuess = jest.fn();
        React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
        wrapper = setUp();

    })

    afterEach(() => {
        React.useState = originalUseState;
    })

    test('state update with value of input box upon change', () => {
        const inputBox = findByTestAttr(wrapper, "[data-test='input-box']");
        const mockEvent = { target: { value: 'train' } }

        inputBox.simulate("change", mockEvent);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    })
    test('field is cleared upon submit button click', () => {

        const submitButton = findByTestAttr(wrapper, "[data-test='submit-button']");

        submitButton.simulate('click',{preventDefault(){}});
        expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
    })

})