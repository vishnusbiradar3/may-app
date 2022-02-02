import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProp } from '../../tesrUtilis';
import Input from '../../../componets/jotto/Input';

const setUp = ( secrectWord ='party') => {
    return (shallow(<Input secrectWord={secrectWord} />));
}


test('render without error', () => {
    const wrapper = setUp({ gussedWords: [] });
    const component = findByTestAttr(wrapper, "[data-test='component-input']");
    expect(component.length).toBe(1);

});

test('does not throw warning with expected props', () => {
    checkProp(Input, {secrectWord :'party'});
})

describe('state controlled input Field',()=>{

    test('state update with value of input box upon change',()=>{
        const mockSetCurrentGuess =jest.fn();
        React.useState=jest.fn(()=>["", mockSetCurrentGuess]);
        const wrapper=setUp();
        const inputBox=findByTestAttr(wrapper, "[data-test='input-box']");

        const mockEvent={ target: {value:'train'}}

        inputBox.simulate("change",mockEvent);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    })

})