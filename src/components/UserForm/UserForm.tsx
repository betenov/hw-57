import React, {ReactEventHandler, useState} from 'react';
import {User, UserMutation} from "../../types";

interface Props {
  onSubmit:(user:User) => void
}

const UserForm:React.FC<Props> = ({onSubmit}) => {

  const [users, setUsers] = useState<UserMutation>({
    name:'',
    email:'',
    isDone: false,
    category:''
  });

  const userChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name , value} = e.target;

    setUsers(prevState => ({...prevState, [name] : value}));
  };
  const onFormSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id:Math.random().toString(),
      ...users,
    })
  }

  return (
    <form onSubmit={onFormSubmit}>
      <h3>Fill in the data</h3>
        <div className="form-group">
          <label htmlFor="name "> Name </label>
          <input name="name" id="name" type="text" className="form-control" value={users.name} onChange={userChange}/>
        </div>
      <div className="form-group">
        <label htmlFor="name "> E-mail </label>
        <input name="email" id="email" type="email" className="form-control form-control-sm"
               value={users.email} onChange={userChange}/>
      </div>
      <div className="form-group">
        <label  className="p-3">Active
          <input name="isDone" id="checkbox" type="checkbox" className="ms-2" />
        </label>

      </div>
      <div className="form-group mb-5">
        <label>
           <select className="p-2" name="category">
            <option>Admin</option>
            <option>User</option>
            <option>Editor</option>
           </select>
        </label>
      </div>
      <button type="submit" className="btn btn-primary  ">Add user</button>
    </form>
  );
};

export default UserForm;