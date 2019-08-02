import React from 'react';
import renderer from 'react-test-renderer'

import RegisterForm from '../components/RegisterForm';



it('renders a register form', () => {
    const wrapper = renderer.create(<RegisterForm />).toJSON();
    expect(wrapper).toMatchSnapshot();

})

it('renders a successful registration', () => {
    const wrapper = renderer.create(<RegisterForm isAdded={true} />).toJSON();
    expect(wrapper).toMatchSnapshot();
})