import React from 'react';
import {User} from "../../types";

interface Props {
  user:User;
}

const User1:React.FC<Props> = ({user}) => {
  return (
    <div>
      <div className="card mb-5" style={{width:"18rem"}}>
        <div className="card-body">
          <h5 className="card-title mb-3">Name of user : {user.name}</h5>
          <h6 className="card-subtitle mb-3 ">Email of user : {user.email}</h6>
          <p className="card-text mb-3">Is active ? :</p>
          <p className="card-text mb-3"> Role :</p>
        </div>
      </div>
    </div>
  );
};

export default User1;