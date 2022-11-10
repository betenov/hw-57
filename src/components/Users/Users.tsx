import React from 'react';
import User from "./User1";



interface Props {
  // @ts-ignore
  users:User[]
}

const Users:React.FC<Props> = ({users}) => {
  return (
    <div>
    <h3>Users</h3>
      {users.map(user => (
        <User key={user.id} user={user}/>
      ))}
    </div>
  );
};

export default Users;