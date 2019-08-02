import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';

import UserList from '../components/UserList';

const users = [{
_id: 1,
username: "a"
}]

it('render a userlist', () => {
    const wrapper = renderer.create(<UserList users={users} getAllUser={() => console.log("hello")}/>).toJSON();
    expect(wrapper).toMatchSnapshot();
})


it('render a table', () => {
    const wrapper = mount(<UserList users={users} getAllUser={() => console.log("hello")}/>);
    const content = <th>Username</th>;
    expect(wrapper.contains(content)).toEqual(true);
})
