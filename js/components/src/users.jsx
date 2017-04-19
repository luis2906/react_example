import React from 'react';

import User from './user.jsx';

export default class Users extends React.Component{
  constructor(props){
    super(props);
    this.states = {};
    this.usersLists = this.usersLists.bind(this);
    this.sortUsers = this.sortUsers.bind(this);
  }

  sortUsers(users, orderBy){
    const self = this;
    return(
      users.sort(function(a, b){
        return b[orderBy] > a[orderBy] ? -1 : b[orderBy] < a[orderBy] ? 1 : 0;
      })
    );
  }

  usersLists(users, orderBy){
    let orderedUsers = this.sortUsers(users, orderBy);
    return(
      orderedUsers.map( function(user) {
        return(<User user={user} key={user.id} />);
      })
    );
  }

  render() {
    return(
      <tbody>
        {this.usersLists(this.props.users, this.props.orderBy)}
      </tbody>
    );
  }
}

Users.propTypes = {
   users: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
   orderBy: React.PropTypes.string.isRequired
};