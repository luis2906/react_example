import React from 'react';
import ReactDOM from 'react-dom';

import UsersTable from './src/users_table.jsx';

const users = [
  { id: 1, name: 'Pablo', lname: 'Rodriguez', role: 'developer', created: '12/02/2010'},
  { id: 2, name: 'Mikel', lname: 'Camps', role: 'speaker', created: '10/01/2011'}
];

ReactDOM.render(<UsersTable users={users}/>, document.getElementById('main-content'));