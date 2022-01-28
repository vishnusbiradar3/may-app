
import { shallow } from 'enzyme';
// import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { findByTestAttr } from '../../tesrUtilis';
import Counter from '../../../componets/counter/Counter';

// Enzyme.configure({ adapter: new EnzymeAdapter() })


const setup =()=>shallow(<Counter />);
// const findByTestAttr =(wrapper,val)=>wrapper.find(val);
describe("Counter App ",()=>{

    test('renders without errors',()=>{
        const wrapper =setup();
        const appComponent= findByTestAttr(wrapper,"[data-test='component-counter-app']");
        expect(appComponent.length).toBe(1);

    });
    test('render App title',()=>{
        const wrapper =setup();
        const appComponent= findByTestAttr(wrapper,'h1');
        expect(appComponent.length).toBe(1);

    });
    test('render increment button',()=>{
        const wrapper =setup();
        const appComponent= findByTestAttr(wrapper,'button');
        expect(appComponent.length).toBe(2);
    });
    test('render counter display',()=>{
        const wrapper =setup();
        const appComponent= findByTestAttr(wrapper,'h3');
        expect(appComponent.length).toBe(1);
    });
    test('counter dipllat start at 0',()=>{
        const wrapper=setup();
        const count =findByTestAttr(wrapper,"[data-test='count']").text();
        expect(count).toBe("0");
    });
    test('click button increments counter display',()=>{
        const wrapper=setup()
        //find the button
        const button =findByTestAttr(wrapper,"[data-test='increment-button']")
        //click the button 
        button.simulate('click');
        //find the display and test that the number has been increemented
        const count =findByTestAttr(wrapper,"[data-test='count']").text();
        expect(count).toBe("1");
    });

    test('click button dicrement Counter dispya',()=>{
        const wrapper=setup();

        //find the button
        const button =findByTestAttr(wrapper,"[data-test='dicrement-button']");
        //click the button
        button.simulate('click');
        //find the display and test that the nuber has been dicrement 
        const count =findByTestAttr(wrapper,"[data-test='count']").text();
        expect(count).toBe("0");
    })
})