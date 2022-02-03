import App from './App';
import { shallow,mount } from 'enzyme';
//activete global mock to make sure getScretWord dosn`t make network call
jest.mock('./componets/jotto/actions');
// jest.mock('./actions');
import { getScretWord as mockGetScretWord } from './componets/jotto/actions';
const setUp = () => {
  // return shallow(<App />);
  return mount(<App />);

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
describe('get secret word', () => {
  beforeEach(()=>{

    mockGetScretWord.mockClear();
  })
  test('getSecretWord on app mount ', () => {
    
    const wrapper =setUp();
    expect(mockGetScretWord).toHaveBeenCalledTimes(1);
  });
  test('getSecretWord does not run on ap update ', () => {
    const wrapper =setUp();
    mockGetScretWord.mockClear();

    wrapper.setProps();
    expect(mockGetScretWord).toHaveBeenCalledTimes(0);
  });
  
  
});


