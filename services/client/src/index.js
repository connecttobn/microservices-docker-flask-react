import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import UsersList from './components/UsersList';

class App extends Component {
  constructor() {
    super();
    //this.getUsers();
    this.state = {
      users: []
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <br/>
            <h1>All Users</h1>
            <hr/><br/>
              <UsersList users={this.state.users}/>
          </div>
        </div>
      </div>
    )
  }

  getUsers() {
    console.log(process.env.REACT_APP_USERS_SERVICE_URL);
    console.log("is it cool");
    axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`)
         .then((res) => { console.log(res.data.data); this.setState( {users: res.data.data.users}) })
         .catch((err) => { console.log(err); })
  }

  componentDidMount() {
    this.getUsers();
  }


};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
