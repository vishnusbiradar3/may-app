import App from './App';
import { shallow } from 'enzyme';



describe("App componenet test case", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  })
  it('Component is mount ', () => {

    expect(wrapper.exists()).toBe(true);

  });
})

