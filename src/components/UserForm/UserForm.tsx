import React from 'react';

const UserForm = () => {
  return (
    <form>
      <h3>Fill in the data</h3>
        <div className="form-group">
          <label htmlFor="name "> Name </label>
          <input name="name" id="name" type="text" className="form-control"/>
        </div>
      <div className="form-group">
        <label htmlFor="name "> E-mail </label>
        <input name="email" id="email" type="email" className="form-control form-control-sm"/>
      </div>
      <div className="form-group">
        <label htmlFor="name" className="p-3">Active </label>
        <input name="checkbox" id="checkbox" type="checkbox" />
      </div>
      <div className="form-group mb-5">
        <select className="p-2">
          <option/>
          <option>Admin</option>
          <option>User</option>
          <option>Editor</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary  ">Add user</button>
    </form>
  );
};

export default UserForm;