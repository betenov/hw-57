import React, {useState} from 'react';
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";
import {User} from "./types";

function App() {

  const [users, setUsers] = useState<User[]>([])


  const addUser = (user:User) => {
    setUsers(prevState => [...prevState , user])
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col">
            <UserForm onSubmit={addUser} />
          </div>
          <div className="col-8">
            <Users users = {users} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
