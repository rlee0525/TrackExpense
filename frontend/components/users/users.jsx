import React from 'react';
import Modal from 'react-modal';
import { values } from 'lodash';
import Navbar from '../navbar/navbar_container';
import UserDetail from './user_detail';

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUsers();
    this.props.clearErrors();
  }

  render() {
    let users = values(this.props.users).sort((a, b) => {
      return a.id - b.id;
    });

    return (
      <div>
        <Navbar />

        <div className="users-list-div">
          {users.map(user => (
            <div key={Math.random()}
                 className="user-list-item">
              <div key={Math.random()} className="users-li">
                <UserDetail user={ user } />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Users;
