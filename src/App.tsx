import React from 'react';
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col">
            <UserForm />
          </div>
          <div className="col-8">
            <Users />
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
