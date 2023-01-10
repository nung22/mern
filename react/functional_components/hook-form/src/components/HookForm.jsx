import React, { useState } from 'react';

const HookForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  // const createUser = (e) => {
  //   e.preventDefault();
  //   const newUser = {firstName, lastName, email, password, confirm};
  //   console.log("Welcome", newUser);
  // };
  
  return ( 
    <div>
      {/* <form onSubmit={createUser}> */}
      <form>
        <div className="form-group">
          <label for="firstName">First Name</label>
          <input className="form-control" type="text" id="firstName" onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label for="lastName">Last Name</label>
          <input className="form-control" type="text" id="lastName" onChange={(e) => setLastName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input className="form-control" type="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input className="form-control" type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="form-group">
          <label for="confirm">Confirm Password</label>
          <input className="form-control" type="password" id="confirm" onChange={(e) => setConfirm(e.target.value)}/>
        </div>
        {/* <input className="btn btn-success" type="submit" value="Create User" /> */}
      </form>

      <h2 className="form-title">Your Form Data</h2>
      <table className="table table-borderless">
        <tr>
          <th>First Name</th>
          <td>{firstName}</td>
        </tr>
        <tr>
          <th>Last Name</th>
          <td>{lastName}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{email}</td>
        </tr>
        <tr>
          <th>Password</th>
          <td>{password}</td>
        </tr>
        <tr>
          <th>Confirm Password</th>
          <td>{confirm}</td>
        </tr>
      </table>
    </div>
  );
}

export default HookForm;