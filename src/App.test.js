import App from './App';
import { shallow } from 'enzyme';

const setUp = () => {
  return shallow(<App />);

}

describe("App componenet test case", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });
  it('Component is mount ', () => {
    expect(wrapper.exists()).toBe(true);
  });
})

