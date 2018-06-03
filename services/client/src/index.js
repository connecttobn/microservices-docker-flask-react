import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import UsersList from './components/UsersList';
import AddUser from './components/AddUser';

class App extends Component {
  constructor() {
    super();
    //this.getUsers();
    this.state = {
      users: [],
      username: '',
      email: ''
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
              <AddUser addUser={this.addUser.bind(this)}
                handleChange={this.handleChange.bind(this)}
                username={this.state.username}
                email={this.state.email}
              />
            <br/>
            <UsersList users={this.state.users}/>
          </div>
        </div>
      </div>
    )
  };

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

  addUser(event) {
    event.preventDefault();
    console.log('sanity check!');
    const data = {
      username: this.state.username,
      email: this.state.email
    }
    axios.post(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`, data)
      .then((res) => {
        this.getUsers();
        this.setState({username: '', email: ''});
       })
      .catch((err) => { console.log(err) })
  };

  handleChange(event) {
    const obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }


};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
