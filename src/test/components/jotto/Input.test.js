
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