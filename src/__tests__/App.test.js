import { shallow, mount } from 'enzyme';
import React from 'react';

import App from '../App';
import RouterHome from '../components/RouterHome';



it('renders without crashing', () => {
  shallow(<App />);
});

it('renders App', () => {
  const wrapper = mount(<App />);
  const content = <RouterHome />;
  expect(wrapper.contains(content)).toEqual(true);
})
