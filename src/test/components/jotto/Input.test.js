
import { shallow } from 'enzyme';
import { findByTestAttr, checkProp } from '../../tesrUtilis';
import Input from '../../../componets/jotto/Input';

const setUp = () => {
    return (shallow(<Input />));
}


test('render without error', () => {
    const wrapper = setUp({ gussedWords: [] });
    const component = findByTestAttr(wrapper, "[data-test='component-input']");
    expect(component.length).toBe(1);

});