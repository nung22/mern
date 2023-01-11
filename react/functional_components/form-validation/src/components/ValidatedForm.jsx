import React, { useReducer } from 'react';

const initialState = {
  firstName: {
    value: '',
    error: null
  },
  lastName: {
    value: '',
    error: null
  },
  email: {
    value: '',
    error: null
  }
};

function reducer(state, action) {
  let errorMessage;
  action.type === 'firstName' && (action.payload.length > 0 && action.payload.length < 2)
  ? errorMessage = 'First name must be at least 2 characters.'
  : action.type === 'lastName' && (action.payload.length > 0 && action.payload.length < 2)
  ? errorMessage = 'Last name must be at least 2 characters.'
  : action.type === 'email' && (action.payload.length > 0 && action.payload.length < 5)
  ? errorMessage = 'Email must be at least 5 characters.'
  : errorMessage = null;
  return {
    ...state,
    [action.type]: {
      value: action.payload,
      error: errorMessage
    }
  };
}

export default function ValidatedForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = e => {
    const {name, value} = e.target;
    dispatch({
      type: name,
      payload: value
    });
  }

  return (
    <>
      {/* {JSON.stringify(state)} */}
      <form>
        <div className="form-group">
          <label className="col-form-label" for="firstName">First Name</label>
          <input className="form-control" type="text" id="firstName" 
            name="firstName" value={state.firstName.value} onChange={handleChange}
          />
        </div>
        { state.firstName.error !== null && (
          <p className="error">{state.firstName.error}</p>
        )}
        <div className="form-group">
          <label for="lastName">Last Name</label>
          <input className="form-control" type="text" id="lastName" 
            name="lastName" value={state.lastName.value} onChange={handleChange}
          />
        </div>
        { state.lastName.error !== null && (
          <p className="error">{state.lastName.error}</p>
        )}
        <div className="form-group">
          <label for="email">Email</label>
          <input className="form-control" type="email" id="email" 
            name="email" value={state.email.value} onChange={handleChange}
          />
        </div>
        { state.email.error !== null && (
          <p className="error">{state.email.error}</p>
        )}
      </form>
    </>
  );
}
