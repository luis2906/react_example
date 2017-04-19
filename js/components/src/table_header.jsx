import React from 'react';

export default class TableHeader extends React.Component{
  render() {
    return(
      <thead>
        <tr>
          <th onClick={() => this.props.orderBy('name')}>First Name</th>
          <th onClick={() => this.props.orderBy('lname')}>Last Name</th>
          <th onClick={() => this.props.orderBy('role')}>Role</th>
          <th onClick={() => this.props.orderBy('created')}>Created at</th>
        </tr>
      </thead>
    );
  }
}

TableHeader.propTypes = {
  orderBy: React.PropTypes.func.isRequired
};