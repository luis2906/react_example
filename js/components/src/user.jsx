import React from 'react';

export default class User extends React.Component{
  render() {
    return(
      <tr className='user'>
        <td className='user-name'>{this.props.user.name}</td>
        <td className='user-lastName'>{this.props.user.lname}</td>
        <td className='user-role'>{this.props.user.role}</td>
        <td className='user-created'>{this.props.user.created}</td>
      </tr>
    );
  }
}

User.propTypes = {
   user: React.PropTypes.object.isRequired
};