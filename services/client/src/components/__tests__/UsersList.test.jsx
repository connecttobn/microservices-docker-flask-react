import React from 'react';
import { shallow } from 'enzyme';

import UsersList from '../UsersList';
import renderer from 'react-test-renderer';

const users = [
  {
    'active': true,
    'email': 'hermanmu@gmail.com',
    'id': 1,
    'username': 'michael'
  },
  {
    'active': true,
    'email': 'michael@mherman.org',
    'id': 2,
    'username': 'michaelherman'
  }
];

test('UsersList renders properly', () => {
  const wrapper = shallow(<UsersList users={users}/>);
  const element = wrapper.find('h4');
  //console.log(element);
  expect(element.length).toBe(2);
  //console.log(element.get(0));
  //console.log(element.get(1));
  expect(element.get(0).props.children).toBe('michael');
});

test('UsersList renders a snapshot properly', () => {
  const tree = renderer.create(<UsersList users={users}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
