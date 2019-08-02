import React from 'react';
import renderer from 'react-test-renderer'

import LoginForm from '../components/LoginForm';

it('renders a login form', () => {
    const wrapper = renderer.create(<LoginForm />).toJSON();
    expect(wrapper).toMatchSnapshot();

})

it('renders a successful login', () => {
    const wrapper = renderer.create(<LoginForm user="hello" isLoggedIn={true} />).toJSON();
    expect(wrapper).toMatchSnapshot();
})