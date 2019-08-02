import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import NavBar from '../components/NavBar';

it('renders a navbar', () => {
    const wrapper = renderer.create(
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>).toJSON();

    expect(wrapper).toMatchSnapshot();
})