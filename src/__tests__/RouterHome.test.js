import { mount } from 'enzyme';
import React from 'react';

import RouterHome from '../components/RouterHome';
import NavBar from '../components/NavBar';

it('renders a navbar', () => {
    const wrapper = mount(<RouterHome />);
    const content = <NavBar />
    expect(wrapper.contains(content)).toEqual(true)

})