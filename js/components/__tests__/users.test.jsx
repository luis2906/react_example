import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Users from '../src/users.jsx';
import User from '../src/user.jsx';

describe('<Users/>', function () {
  const user_1 = { id: 1, name: 'Pablo', lname: 'Rodriguez', role: 'developer', created: '12/02/2010'};
  const user_2 = { id: 2, name: 'Mikel', lname: 'Camps', role: 'speaker', created: '10/01/2011'};
  const users = [user_1, user_2];

  const props = {
    users: users,
    orderBy: 'lname'
  };

  it('users structure', function () {
    const wrapper = mount(<Users {...props} />);
    expect(wrapper.find('tbody').getNodes()).to.have.lengthOf(1);
    expect(wrapper.find('tr').getNodes()).to.have.lengthOf(2);
  });

  it('users orderBy', function(){
    const pablo = shallow(<User user={user_1} />);
    const mikel = shallow(<User user={user_2} />);
    const wrapper = mount(<Users {...props} />);

    expect(wrapper.find('tr').first().html()).to.equal(mikel.html());
    wrapper.setProps({ orderBy: 'role' });
    expect(wrapper.find('tr').first().html()).to.equal(pablo.html());
  });
});