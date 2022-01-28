import { shallow } from 'enzyme';
// import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Congrats from '../../../componets/jotto/Congrats';
import checkPropTypes from 'check-prop-types';
import { findByTestAttr, checkProp } from '../../tesrUtilis';
// Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { sucess: false }

const setup = (props = {}) => {
    const setUpProps = { ...defaultProps, ...props };
    return shallow(<Congrats {...setUpProps} />);
}
describe("Congrats Component", () => {
    test("render without error", () => {
        const wrapper = setup({ sucess: false });
        const coponenet = findByTestAttr(wrapper, "[data-test='component-congrats']")
        expect(coponenet.length).toBe(1);
    });
    test('render no text when `sucess` props is false ', () => {
        const wrapper = setup({ sucess: false });
        const coponenet = findByTestAttr(wrapper, "[data-test='component-congrats']");
        expect(coponenet.text()).toBe('');
    });
    test('render non-empty congrats message when `sucess` prop is true', () => {
        const wrapper = setup({ sucess: true });
        const message = findByTestAttr(wrapper, "[data-test='congrats-message']");
        expect(message.text().length).not.toBe(0);
    })
    test('Does not throw warning expected props', () => {
        const expectedProps = { sucess: false };
        // const propsError=checkPropTypes(Congrats.propTypes,expectedProps,'props',Congrats.name);
        // expect(propsError).toBeUndefined();

        checkProp(Congrats, expectedProps);
    })
});