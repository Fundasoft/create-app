const React = require('react');
const { shallow } = require('enzyme');

const Component = require('..');
const props = {};

describe('Header component', () => {
  it('Should render component correctly', () => {
    const wrapper = shallow(<Component {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  // Example: pure js test
  it('Should add correctly two numbers', () => {
    const a = 2;
    const b = 3;

    expect(a + b).toEqual(5);
  });
});
