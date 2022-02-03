import { shallow } from 'enzyme';
import Jotto from '../../../componets/jotto/Jotto';
import { findByTestAttr } from '../../tesrUtilis';

const setUp = () => {
    return shallow(<Jotto />);
  
  }


    test("render without error",()=>{
        const wrapper =setUp();
        const appComponent =findByTestAttr(wrapper,"[data-test='component-app']");
        expect(appComponent).toHaveLength(1);
    });
