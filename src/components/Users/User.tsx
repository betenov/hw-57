import React from 'react';

const User = () => {
  return (
    <div>
      <div className="card" style={{width:"18rem"}}>
        <div className="card-body">
          <h5 className="card-title mb-3">Name of user :</h5>
          <h6 className="card-subtitle mb-3 ">Email of user :</h6>
          <p className="card-text mb-3">Is active ? :</p>
          <p className="card-text mb-3"> Role :</p>
        </div>
      </div>
    </div>
  );
};

export default User;