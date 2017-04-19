import React from 'react';

import TableHeader from './table_header.jsx';
import Users from './users.jsx';

export default class UsersTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      orderByColumn: 'lname',
    };
    this.orderBy = this.orderBy.bind(this);
  }

  orderBy(column){
    this.setState({
      orderByColumn: column
    });
  }

  render() {
    return(
      <table className='users'>
        <TableHeader orderBy={this.orderBy} />
        <Users users={this.props.users} orderBy={this.state.orderByColumn} />
      </table>
    );
  }
}

UsersTable.propTypes = {
   users: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};