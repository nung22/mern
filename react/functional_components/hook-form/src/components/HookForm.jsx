import React, { useState } from 'react';

const HookForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirm, setConfirm] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    e.target.value.length > 0 && e.target.value.length < 2 
    ? setFirstNameError("First name must be at least 2 characters.")
    : setFirstNameError("");
  }
  const handleLastName = (e) => {
    setLastName(e.target.value);
    e.target.value.length > 0 && e.target.value.length < 2 
    ? setLastNameError("Last name must be at least 2 characters.")
    : setLastNameError("");
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
    e.target.value.length > 0 && e.target.value.length < 5 
    ? setEmailError("Email must be at least 5 characters.")
    : setEmailError("");
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
    e.target.value.length > 0 && e.target.value.length < 8 
    ? setPasswordError("Password must be at least 8 characters.")
    : setPasswordError("");
  }
  const handleConfirm = (e) => {
    setConfirm(e.target.value);
    e.target.value.length > 0 && e.target.value.length < 8 
    ? setConfirmError("Password must be at least 8 characters.")
    : e.target.value.length > 0 && e.target.value !== password 
    ? setConfirmError("Passwords must match.")
    : setConfirmError("");
  }
  

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
          <label className="col-form-label" for="firstName">First Name</label>
          <input className="form-control" type="text" id="firstName" onChange={handleFirstName}/>
        </div>
        {
          firstNameError ? <p style={{color:'rgb(226, 108, 108)'}}>{firstNameError}</p> : ''
        }
        <div className="form-group">
          <label for="lastName">Last Name</label>
          <input className="form-control" type="text" id="lastName" onChange={handleLastName}/>
        </div>
        {
          lastNameError ? <p style={{color:'rgb(226, 108, 108)'}}>{lastNameError}</p> : ''
        }
        <div className="form-group">
          <label for="email">Email</label>
          <input className="form-control" type="email" id="email" onChange={handleEmail}/>
        </div>
        {
          emailError ? <p style={{color:'rgb(226, 108, 108)'}}>{emailError}</p> : ''
        }
        <div className="form-group">
          <label for="password">Password</label>
          <input className="form-control" type="password" id="password" onChange={handlePassword}/>
        </div>
        {
          passwordError ? <p style={{color:'rgb(226, 108, 108)'}}>{passwordError}</p> : ''
        }
        <div className="form-group">
          <label for="confirm">Confirm Password</label>
          <input className="form-control" type="password" id="confirm" onChange={handleConfirm}/>
        </div>
        {
          confirmError ? <p style={{color:'rgb(226, 108, 108)'}}>{confirmError}</p> : ''
        }
        {/* <input className="btn btn-success" type="submit" value="Create User" /> */}
      </form>

      {/* <h2 className="form-title">Your Form Data</h2>
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
      </table> */}
    </div>
  );
}

export default HookForm;